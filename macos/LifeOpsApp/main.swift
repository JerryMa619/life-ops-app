import Cocoa
import UniformTypeIdentifiers
import WebKit

final class AppDelegate: NSObject, NSApplicationDelegate, WKNavigationDelegate {
    private var window: NSWindow?
    private var webView: WKWebView?

    func applicationDidFinishLaunching(_ notification: Notification) {
        configureMenus()

        let configuration = WKWebViewConfiguration()
        configuration.preferences.javaScriptCanOpenWindowsAutomatically = false

        let view = WKWebView(frame: .zero, configuration: configuration)
        view.navigationDelegate = self
        view.allowsBackForwardNavigationGestures = true

        let window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 1280, height: 820),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = "LifeOps"
        window.minSize = NSSize(width: 960, height: 640)
        window.center()
        window.contentView = view
        window.makeKeyAndOrderFront(nil)

        self.window = window
        self.webView = view

        loadLifeOps(in: view)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        true
    }

    private func loadLifeOps(in view: WKWebView) {
        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html") else {
            showMissingResourceMessage(in: view)
            return
        }

        let resourceDirectory = indexURL.deletingLastPathComponent()
        view.loadFileURL(indexURL, allowingReadAccessTo: resourceDirectory)
    }

    private func configureMenus() {
        let mainMenu = NSMenu()

        let appMenuItem = NSMenuItem()
        let appMenu = NSMenu(title: "LifeOps")
        appMenu.addItem(NSMenuItem(title: "About LifeOps", action: #selector(showAbout), keyEquivalent: ""))
        appMenu.addItem(.separator())
        appMenu.addItem(NSMenuItem(title: "Quit LifeOps", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q"))
        appMenuItem.submenu = appMenu
        mainMenu.addItem(appMenuItem)

        let fileMenuItem = NSMenuItem()
        let fileMenu = NSMenu(title: "File")
        let exportItem = NSMenuItem(title: "Export Data...", action: #selector(exportData), keyEquivalent: "e")
        exportItem.target = self
        fileMenu.addItem(exportItem)
        fileMenuItem.submenu = fileMenu
        mainMenu.addItem(fileMenuItem)

        let viewMenuItem = NSMenuItem()
        let viewMenu = NSMenu(title: "View")
        let playbooksItem = NSMenuItem(title: "Show Playbooks", action: #selector(showPlaybooks), keyEquivalent: "1")
        let kitchenItem = NSMenuItem(title: "Show Kitchen", action: #selector(showKitchen), keyEquivalent: "2")
        let costsItem = NSMenuItem(title: "Show Costs", action: #selector(showCosts), keyEquivalent: "3")
        let reloadItem = NSMenuItem(title: "Reload", action: #selector(reloadApp), keyEquivalent: "r")

        [playbooksItem, kitchenItem, costsItem, reloadItem].forEach { item in
            item.target = self
        }

        viewMenu.addItem(playbooksItem)
        viewMenu.addItem(kitchenItem)
        viewMenu.addItem(costsItem)
        viewMenu.addItem(.separator())
        viewMenu.addItem(reloadItem)
        viewMenuItem.submenu = viewMenu
        mainMenu.addItem(viewMenuItem)

        let windowMenuItem = NSMenuItem()
        let windowMenu = NSMenu(title: "Window")
        windowMenu.addItem(NSMenuItem(title: "Minimize", action: #selector(NSWindow.miniaturize(_:)), keyEquivalent: "m"))
        windowMenu.addItem(NSMenuItem(title: "Zoom", action: #selector(NSWindow.performZoom(_:)), keyEquivalent: ""))
        windowMenuItem.submenu = windowMenu
        mainMenu.addItem(windowMenuItem)
        NSApp.windowsMenu = windowMenu

        NSApp.mainMenu = mainMenu
    }

    @objc private func showAbout() {
        let alert = NSAlert()
        alert.messageText = "LifeOps"
        alert.informativeText = "Version 0.1.0\nA practical life-management app for playbooks, meals, and recurring costs."
        alert.addButton(withTitle: "OK")
        alert.runModal()
    }

    @objc private func exportData() {
        let script = """
        (() => JSON.stringify({
          app: "LifeOps",
          version: "0.1.0",
          exportedAt: new Date().toISOString(),
          data: {
            playbooks: JSON.parse(localStorage.getItem("lifeops.playbooks.v1") || "[]"),
            playbookRuns: JSON.parse(localStorage.getItem("lifeops.playbookRuns.v1") || "[]"),
            ingredients: JSON.parse(localStorage.getItem("lifeops.ingredients.v1") || "[]"),
            savedMeals: JSON.parse(localStorage.getItem("lifeops.savedMeals.v1") || "[]"),
            dismissedMeals: JSON.parse(localStorage.getItem("lifeops.dismissedMeals.v1") || "[]"),
            recurringCosts: JSON.parse(localStorage.getItem("lifeops.recurringCosts.v1") || "[]")
          }
        }, null, 2))()
        """

        webView?.evaluateJavaScript(script) { [weak self] result, error in
            DispatchQueue.main.async {
                if let error {
                    self?.showError("Export failed", detail: error.localizedDescription)
                    return
                }

                guard let json = result as? String else {
                    self?.showError("Export failed", detail: "LifeOps could not read the local app data.")
                    return
                }

                self?.presentExportPanel(json: json)
            }
        }
    }

    @objc private func reloadApp() {
        webView?.reload()
    }

    @objc private func showPlaybooks() {
        switchModule("playbooks")
    }

    @objc private func showKitchen() {
        switchModule("kitchen")
    }

    @objc private func showCosts() {
        switchModule("costs")
    }

    private func switchModule(_ module: String) {
        let script = "document.querySelector('[data-module=\"\(module)\"]')?.click();"
        webView?.evaluateJavaScript(script)
    }

    private func presentExportPanel(json: String) {
        let panel = NSSavePanel()
        panel.title = "Export LifeOps Data"
        panel.nameFieldStringValue = "lifeops-export-\(dateStamp()).json"
        panel.allowedContentTypes = [.json]
        panel.canCreateDirectories = true

        let completion: (NSApplication.ModalResponse) -> Void = { [weak self] response in
            guard response == .OK, let url = panel.url else { return }

            do {
                try json.write(to: url, atomically: true, encoding: .utf8)
            } catch {
                self?.showError("Export failed", detail: error.localizedDescription)
            }
        }

        if let window {
            panel.beginSheetModal(for: window, completionHandler: completion)
        } else {
            completion(panel.runModal())
        }
    }

    private func showError(_ message: String, detail: String) {
        let alert = NSAlert()
        alert.alertStyle = .warning
        alert.messageText = message
        alert.informativeText = detail
        alert.addButton(withTitle: "OK")
        if let window {
            alert.beginSheetModal(for: window)
        } else {
            alert.runModal()
        }
    }

    private func dateStamp() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd-HHmm"
        return formatter.string(from: Date())
    }

    private func showMissingResourceMessage(in view: WKWebView) {
        let html = """
        <!doctype html>
        <html>
          <body style="font-family:-apple-system;padding:32px;">
            <h1>LifeOps could not start</h1>
            <p>The bundled app resources are missing. Rebuild the app with scripts/build-macos-app.sh.</p>
          </body>
        </html>
        """
        view.loadHTMLString(html, baseURL: nil)
    }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.activate(ignoringOtherApps: true)
app.run()

import Cocoa
import WebKit

final class AppDelegate: NSObject, NSApplicationDelegate, WKNavigationDelegate {
    private var window: NSWindow?
    private var webView: WKWebView?

    func applicationDidFinishLaunching(_ notification: Notification) {
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

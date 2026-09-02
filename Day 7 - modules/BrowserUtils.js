export function getSupportedBrowsers() {
    return ["chromium", "firefox", "webkit"];
}

export function isSupportedBrowser(browser) {
    return getSupportedBrowsers().includes(browser);
}
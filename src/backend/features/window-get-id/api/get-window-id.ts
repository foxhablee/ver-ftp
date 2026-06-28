import { BrowserWindow, type WebContents } from 'electron'

export function getWindowId(webContent: WebContents): number {
    return BrowserWindow.fromWebContents(webContent)?.id || -1
}

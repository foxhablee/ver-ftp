import type { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import type { IpcCreateSubwindowProps } from './contract'

export function loadSubwindowContent(window: BrowserWindow, props: IpcCreateSubwindowProps): void {
    if (is.dev && 'contentLink' in props) {
        window.loadURL(props.contentLink)
    } else if (!is.dev && 'contentFile' in props) {
        window.loadFile(props.contentFile)
    }
}

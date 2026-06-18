import { join } from 'path'
import type { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import type { IpcCreateSubwindowProps } from '../model/contract'

export function loadSubwindowContent(window: BrowserWindow, props: IpcCreateSubwindowProps): void {
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        window.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/${props.page}`)
    } else {
        window.loadFile(join(__dirname, `../renderer/index.html#${props.page}`))
    }
}

import { join } from 'path'
import type { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import { pageRegistry, type SubwindowContent } from '@/shared/model'

export function loadSubwindowContent(window: BrowserWindow, props: SubwindowContent): void {
    if (!pageRegistry.includes(props.page)) {
        throw new Error(`Trying load page '${props.page}' not from allowed list`)
    }

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        window.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/${props.page}`)
    } else {
        window.loadFile(join(__dirname, `../renderer/index.html#${props.page}`))
    }
}

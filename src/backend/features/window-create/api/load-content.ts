import type { BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import { pageRegistry } from '@/shared/model'
import { PATHS } from '@/backend/shared/lib'
import { SubwindowContent } from '../model/window-create.ipc-model'

export function loadSubwindowContent(window: BrowserWindow, props: SubwindowContent): void {
    if (!pageRegistry.includes(props.page)) {
        throw new Error(`Trying load page '${props.page}' not from allowed list`)
    }

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        window.loadURL(`${process.env['ELECTRON_RENDERER_URL']}/${props.page}`)
    } else {
        window.loadFile(`${PATHS.INDEX_HTML}#${props.page}`)
    }
}

import type { IpcMainInvokeEvent } from 'electron'
import { createSubwindow } from './createSubwindow'
import { loadSubwindowContent } from './loadContent'
import { type IpcCreateSubwindowProps, type IpcResponseCreateSubwindow } from '../model/contract'
import { SubwindowProps } from '../model/SubwindowProps'
import { SubwindowContentProps } from '../model/SubwindowContentProps'

type Deps = Pick<SubwindowProps & SubwindowContentProps, 'parent' | 'pageRegistry'>

export function ipcHandlerCreateSubwindow(deps: Deps) {
    return async (_: IpcMainInvokeEvent, props: IpcCreateSubwindowProps): Promise<IpcResponseCreateSubwindow> => {
        try {
            if (!deps.pageRegistry.includes(props.page)) {
                throw new Error(`Trying create new window with page '${props.page}' not from allowed list`)
            }

            const win = createSubwindow({ size: props.size, modal: props.modal, ...deps })
            loadSubwindowContent(win, { ...deps, ...props })
            return { ok: true, data: undefined }
        } catch (error) {
            console.error(error)
            return { ok: false, error: 'Error while creating subwindow' }
        }
    }
}

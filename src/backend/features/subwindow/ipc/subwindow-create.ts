import type { IpcMainInvokeEvent } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import { pageRegistry, type IpcCreateSubwindowProps, type Subwindow } from '@/shared/model'
import { createSubwindow } from '../api/create-subwindow'
import { loadSubwindowContent } from '../api/load-content'

type Deps = Pick<Subwindow, 'parent'>

export function ipcHandlerSubwindowCreate(deps: Deps) {
    return async (
        _: IpcMainInvokeEvent,
        props: IpcCreateSubwindowProps,
    ): Promise<IpcResponseMap[typeof IPC_METHODS.SUBWINDOW_CREATE]> => {
        try {
            if (!pageRegistry.includes(props.page)) {
                console.error(`Trying create new window with page '${props.page}' not from allowed list`)
                return { ok: false, code: 'not_exists', errorText: `page content ${props.page} not exists` }
            }

            const win = createSubwindow({ ...deps, size: props.size, modal: props.modal })
            loadSubwindowContent(win, { page: props.page })
            return { ok: true, data: undefined }
        } catch (error) {
            console.error(error)
            return { ok: false, code: 'error', errorText: 'Error while creating subwindow' }
        }
    }
}

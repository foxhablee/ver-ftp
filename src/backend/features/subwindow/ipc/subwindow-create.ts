import { IpcError } from '@/shared/ipc'
import { pageRegistry, type Subwindow } from '@/shared/model'
import { wrapIpcHandler } from '@/backend/shared/lib'
import { createSubwindow } from '../api/create-subwindow'
import { loadSubwindowContent } from '../api/load-content'
import { WINDOW_CREATE_METHOD_CHANNEL, WindowCreateMethod } from '../model/subwindow-create.ipc-model'

type Deps = Pick<Subwindow, 'parent'>

export function ipcHandlerSubwindowCreate(deps: Deps) {
    return wrapIpcHandler(WINDOW_CREATE_METHOD_CHANNEL, async (_, props: WindowCreateMethod['props']) => {
        if (!pageRegistry.includes(props.page)) {
            throw new IpcError('not_exists', `page content ${props.page} not exists`)
        }
        const win = createSubwindow({ ...deps, size: props.size, modal: props.modal })
        loadSubwindowContent(win, { page: props.page })
    })
}

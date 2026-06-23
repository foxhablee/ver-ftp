import { wrapIpcHandler } from '@/backend/shared/lib'
import { getWindowId } from '../api/get-window-id'
import { WINDOW_GET_ID_METHOD_CHANNEL } from '../model/window-get-id.ipc-model'

export const ipcHandlerWindowGetId = wrapIpcHandler(WINDOW_GET_ID_METHOD_CHANNEL, async (event) => {
    return getWindowId(event.sender)
})

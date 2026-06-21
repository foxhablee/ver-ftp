import type { IpcMainInvokeEvent } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import { getWindowId } from '../api/get-window-id'

export async function ipcHandlerWindowGetId(
    event: IpcMainInvokeEvent,
): Promise<IpcResponseMap[typeof IPC_METHODS.WINDOW_GET_ID]> {
    try {
        const id = getWindowId(event.sender)
        return { ok: true, data: id }
    } catch (error) {
        console.error(error)
        return { ok: false, code: 'error', errorText: 'Error while getting window id' }
    }
}

import { ipcRenderer } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'

export function invokeWindowGetId(): Promise<IpcResponseMap[typeof IPC_METHODS.WINDOW_GET_ID]> {
    return ipcRenderer.invoke(IPC_METHODS.WINDOW_GET_ID)
}

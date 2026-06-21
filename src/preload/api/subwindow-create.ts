import { ipcRenderer } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import type { IpcCreateSubwindowProps } from '@/shared/model'

export function invokeCreateSubwindow(
    props: IpcCreateSubwindowProps,
): Promise<IpcResponseMap[typeof IPC_METHODS.WINDOW_CREATE]> {
    return ipcRenderer.invoke(IPC_METHODS.WINDOW_CREATE, props)
}

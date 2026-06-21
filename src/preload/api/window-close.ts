import { ipcRenderer } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import type { IpcWindowCloseProps } from '@/shared/model'

export function invokeWindowClose(
    props: IpcWindowCloseProps,
): Promise<IpcResponseMap[typeof IPC_METHODS.WINDOW_CLOSE]> {
    return ipcRenderer.invoke(IPC_METHODS.WINDOW_CLOSE, props)
}

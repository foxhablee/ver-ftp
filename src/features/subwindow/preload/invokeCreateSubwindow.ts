import { ipcRenderer } from 'electron'
import { CHANNEL_CREATE_SUBWINDOW, IpcCreateSubwindowProps, IpcResponseCreateSubwindow } from '../model/contract'

export function invokeCreateSubwindow(props: IpcCreateSubwindowProps): Promise<IpcResponseCreateSubwindow> {
    return ipcRenderer.invoke(CHANNEL_CREATE_SUBWINDOW, props)
}

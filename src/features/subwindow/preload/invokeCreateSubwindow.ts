import { ipcRenderer } from 'electron'
import { CHANNEL_CREATE_SUBWINDOW, IpcCreateSubwindowProps, IpcResponseCreateSubwindow } from '../backend'

export function invokeCreateSubwindow(props: IpcCreateSubwindowProps): Promise<IpcResponseCreateSubwindow> {
    return ipcRenderer.invoke(CHANNEL_CREATE_SUBWINDOW, props)
}

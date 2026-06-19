import { ipcRenderer } from 'electron'
import { CHANNEL_CREATE_SUBWINDOW, IpcCreateSubwindowProps, IpcResponseCreateSubwindow } from '../model/contract'
import { PageRegistry } from '@/features/subwindow'

export function invokeCreateSubwindow<TPageRegistry extends PageRegistry = PageRegistry>(
    props: IpcCreateSubwindowProps<TPageRegistry>,
): Promise<IpcResponseCreateSubwindow> {
    return ipcRenderer.invoke(CHANNEL_CREATE_SUBWINDOW, props)
}

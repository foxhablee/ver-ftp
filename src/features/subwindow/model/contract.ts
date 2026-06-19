import type { IpcResponse } from '@/shared/ipc'
import { SubwindowProps } from '@/features/subwindow/model/SubwindowProps'
import { SubwindowContentProps } from '@/features/subwindow/model/SubwindowContentProps'
import { PageRegistry } from '@/shared/model'

export const CHANNEL_CREATE_SUBWINDOW = 'window:create' as const

export type IpcCreateSubwindowProps<TPageRegistry extends PageRegistry = PageRegistry> = Omit<
    SubwindowProps & SubwindowContentProps<TPageRegistry>,
    'parent' | 'pageRegistry'
>

export type IpcResponseCreateSubwindow = IpcResponse<undefined>

import type { IpcResponse } from '@/shared/ipc'

export const CHANNEL_CREATE_SUBWINDOW = 'window:create' as const

type WindowContent = { page: string }

export type IpcCreateSubwindowProps = WindowContent & {
    size?: { width: number; height: number }
    modal?: boolean
}

export type IpcResponseCreateSubwindow = IpcResponse<undefined>

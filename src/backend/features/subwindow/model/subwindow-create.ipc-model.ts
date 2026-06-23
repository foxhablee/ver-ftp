import type { BrowserWindow } from 'electron'
import { CreateIpcMethod } from '@/shared/ipc'
import { PageLink } from '@/shared/model'

export const WINDOW_CREATE_METHOD_CHANNEL = 'window:create' as const

interface WindowSize {
    width: number
    height: number
}

export interface Subwindow {
    parent: BrowserWindow
    size?: WindowSize
    modal?: boolean
}

export interface SubwindowContent {
    page: PageLink
}

export type IpcCreateSubwindowProps = Omit<Subwindow & SubwindowContent, 'parent'>
export type WindowCreateMethod = CreateIpcMethod<{
    channel: typeof WINDOW_CREATE_METHOD_CHANNEL
    props: IpcCreateSubwindowProps
    response: undefined
    errors: 'not_exists'
}>

import type { BrowserWindow } from 'electron'
import { PageLink } from './PageRegistry'

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

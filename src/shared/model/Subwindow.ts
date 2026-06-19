import type { BrowserWindow } from 'electron'
import type { PageRegistry } from './PageRegistry'

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
    page: PageRegistry[number]
}

export type IpcCreateSubwindowProps = Omit<Subwindow & SubwindowContent, 'parent'>

import { BrowserWindow } from 'electron'

interface WindowSize {
    width: number
    height: number
}

export interface SubwindowProps {
    parent: BrowserWindow
    size?: WindowSize
    modal?: boolean
}

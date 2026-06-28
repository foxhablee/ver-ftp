import type { BrowserWindow } from 'electron'

interface Props {
    parent: BrowserWindow
    id: number
}

export function closeWindow({ parent, id }: Props): boolean {
    const target = parent.getChildWindows().find((win) => win.id === id)
    if (!target) return false

    target.close()
    return true
}

export const FS_ITEM_KIND = {
    UNKNOWN: 'unknown',
    FILE: 'file',
    DIRECTORY: 'directory',
    SYMBOLIC: 'symbolic',
} as const

export type FsItemKind = (typeof FS_ITEM_KIND)[keyof typeof FS_ITEM_KIND]

export interface FsItem {
    name: string
    path: string
    kind: FsItemKind
    /** MIME type or extension. `undefined` for directory/parent */
    type?: string
    /** Size in bytes; `undefined` for directory/parent */
    size?: number
    modifiedAt?: number
}

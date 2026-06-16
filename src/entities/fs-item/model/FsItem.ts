export type FsItemKind = 'file' | 'directory' | 'symbolic' | 'unknown'

export const FS_ITEM_KIND: {
    [Key in Uppercase<FsItemKind>]: Lowercase<Key>
} = {
    UNKNOWN: 'unknown',
    FILE: 'file',
    DIRECTORY: 'directory',
    SYMBOLIC: 'symbolic',
}

export interface FsItem {
    name: string
    path: string
    kind: FsItemKind
    /** MIME type or extension. `undefined` for directory/parent */
    type?: string
    /** Size in bytes; `undefined` for directory/parent */
    size?: number
    modifiedAt?: Date
}

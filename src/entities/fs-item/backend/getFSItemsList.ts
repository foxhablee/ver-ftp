import type { FTPConnection } from '@/shared/ftp/backend'
import { FileType } from 'basic-ftp'
import { FS_ITEM_KIND, FsItem, FsItemKind } from '../model/FsItem'

function convertFileTypeToFSItemKind(fileType: FileType): FsItemKind {
    switch (fileType) {
        case FileType.File:
            return FS_ITEM_KIND.FILE
        case FileType.SymbolicLink:
            return FS_ITEM_KIND.SYMBOLIC
        case FileType.Directory:
            return FS_ITEM_KIND.DIRECTORY
        case FileType.Unknown:
        default:
            return FS_ITEM_KIND.UNKNOWN
    }
}

interface GetFileEntitiesListProps {
    connection: FTPConnection
    folder?: string
}

export async function getFSItemsList(props: GetFileEntitiesListProps): Promise<FsItem[]> {
    const list = await props.connection.client.list(props.folder)
    return list.map((i) => ({
        name: i.name,
        path: i.link || '',
        kind: convertFileTypeToFSItemKind(i.type),
        size: i.size,
        modifiedAt: i.modifiedAt,
    }))
}

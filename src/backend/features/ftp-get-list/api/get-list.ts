import { FileType } from 'basic-ftp'
import { FS_ITEM_KIND, type FsItem, type FsItemKind } from '@/shared/model'
import { FTPConnection } from '@/backend/shared/model'

function convertFileTypeToFsItemKind(fileType: FileType): FsItemKind {
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

interface GetFsItemsListProps {
    connection: FTPConnection
    folder?: string
}

export async function getFsItemsList(props: GetFsItemsListProps): Promise<FsItem[]> {
    const list = await props.connection.client.list(props.folder)
    return list.map((i) => ({
        name: i.name,
        path: i.link || '',
        kind: convertFileTypeToFsItemKind(i.type),
        size: i.size,
        modifiedAt: i.modifiedAt,
    }))
}

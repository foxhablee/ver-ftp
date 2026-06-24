import { readdir } from 'node:fs/promises'
import { FsItem, FsItemKind } from '@/shared/model'
import type { Dirent } from 'node:fs'

function getFsItemKindFromDirent(dirent: Dirent): FsItemKind {
    if (dirent.isSymbolicLink()) return 'symbolic'
    if (dirent.isFile()) return 'file'
    if (dirent.isDirectory()) return 'directory'

    return 'unknown'
}

/** @param path - absolute path of folder */
export async function pathContent(path: string): Promise<FsItem[]> {
    const entries = await readdir(path, { withFileTypes: true })

    return entries.map((dirent) => ({
        name: dirent.name,
        path: dirent.parentPath,
        kind: getFsItemKindFromDirent(dirent),
        type: '',
        size: -1,
        modifiedAt: new Date(-1),
    }))
}

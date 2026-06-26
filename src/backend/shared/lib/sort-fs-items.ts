import { FsItem } from '@/shared/model'

export function sortByName(list: FsItem[]): FsItem[] {
    return list.toSorted((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
}

export function sortByKind(list: FsItem[]): FsItem[] {
    const folders = list.filter((i) => i.kind === 'directory')
    const files = list.filter((i) => i.kind !== 'directory')

    return [sortByName(folders), sortByName(files)].flat()
}

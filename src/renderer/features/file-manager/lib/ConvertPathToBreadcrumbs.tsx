import { Breadcrumb } from '@/renderer/features/file-manager/model/Breadcrumb'

export function convertPathToBreadcrumbs(path: string[]): Breadcrumb[] {
    return path.map((pathItem, index) => ({
        name: pathItem,
        path: path.slice(0, index + 1),
    }))
}

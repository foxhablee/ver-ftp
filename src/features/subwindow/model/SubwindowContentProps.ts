import { PageRegistry } from '@/features/subwindow'

export interface SubwindowContentProps<TPageRegistry extends PageRegistry = PageRegistry> {
    pageRegistry: TPageRegistry
    page: TPageRegistry[number]
}

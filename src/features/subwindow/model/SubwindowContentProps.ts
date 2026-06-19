import { PageRegistry } from '@/shared/model'

export interface SubwindowContentProps<TPageRegistry extends PageRegistry = PageRegistry> {
    pageRegistry: TPageRegistry
    page: TPageRegistry[number]
}

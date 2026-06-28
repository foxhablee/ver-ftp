import { useLazyCreateWindowQuery } from '@/renderer/shared/api'
import { PageLink } from '@/shared/model'

interface UseWindowApiHook {
    openNewWindow: (page: PageLink) => void
}

export function useWindowApi(): UseWindowApiHook {
    const [createWindow] = useLazyCreateWindowQuery()

    const openNewWindow: UseWindowApiHook['openNewWindow'] = (page) => {
        createWindow({ page })
    }

    return { openNewWindow }
}

import { Connection } from '@/shared/model'
import { connectionsMap } from '@/backend/shared/model'

export function connectionsList(): Connection[] {
    return Array.from(connectionsMap.keys(), (id) => ({ id }))
}

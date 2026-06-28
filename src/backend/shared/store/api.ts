import { getStoreByToken } from './read'
import { JsonWritableData, safeWriteDataByToken } from './write'

export const storeApi = {
    getByToken<TData>(token: string): TData {
        return getStoreByToken(token)
    },

    writeByToken(token: string, data: JsonWritableData): void {
        safeWriteDataByToken(token, data)
    },
}

import { readFileSync } from 'node:fs'
import { tryJsonParse } from '@/backend/shared/lib'
import { getStore } from './store'

export function getStoreData(): object {
    const fileData = readFileSync(getStore().filePath, 'utf8')
    const json = tryJsonParse<object>(fileData)
    if (json) {
        return json
    } else {
        throw new Error('Store data a broken')
    }
}

export function getStoreByToken<TData = unknown>(token: string): TData {
    const data = getStoreData()
    if (token in data) return data[token]

    throw new Error(`Data with token '${token}' not exists in store`)
}

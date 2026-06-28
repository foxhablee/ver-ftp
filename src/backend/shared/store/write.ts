import { getStoreData } from './read'
import { writeFileSync, renameSync } from 'node:fs'
import { tryJsonStringify } from '@/backend/shared/lib'
import { getStore } from './store'

export type JsonWritableData = object | [] | string | number | boolean

function writeDataToStore(data: object): void {
    const jsonString = tryJsonStringify(data)

    if (jsonString) {
        writeFileSync(getStore().tempFilePath, jsonString)
        renameSync(getStore().tempFilePath, getStore().filePath)
    }
}

export function writeDataByToken(token: string, data: JsonWritableData): void {
    const storeContent = getStoreData()

    storeContent[token] = data
    return writeDataToStore(storeContent)
}

export function safeWriteDataByToken(token: string, data: JsonWritableData): boolean {
    try {
        writeDataByToken(token, data)
        return true
    } catch (error) {
        console.error(`Data not written by token '${token}' in store`, { token, data, error })
        return false
    }
}

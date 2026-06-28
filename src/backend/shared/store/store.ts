import ElectronStore from 'electron-store'
import { is } from '@electron-toolkit/utils'
import { FOLDER_FILES_NAMES, PATHS } from '@/backend/shared/model'
import type { StoreSchema } from './index'

let store: ElectronStore<StoreSchema> | null = null

export function getStore(): ElectronStore<StoreSchema> {
    if (!store) {
        throw new Error('Store not created')
    }

    return store
}

/**
 * Create the singleton store.
 * electron-store resolves userData and performs atomic writes itself.
 * No `defaults` - each feature owns its own defaults and applies them lazily on read.
 */
export function createStore(): ElectronStore<StoreSchema> {
    if (store) return store

    return (store = new ElectronStore<StoreSchema>({
        name: FOLDER_FILES_NAMES.STORE,
        ...(is.dev ? { cwd: PATHS.DEV_USER_DATA } : {}),
    }))
}

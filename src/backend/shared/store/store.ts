import path from 'node:path'
import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { is } from '@electron-toolkit/utils'
import { FOLDER_FILES_NAMES, PATHS } from '@/backend/shared/model'
import { isErrnoException } from '@/backend/shared/lib'

interface Store {
    app: Electron.App
    folderPath: string
    filePath: string
    tempFilePath: string
}

let store: Store | null = null

export function getStore(): Store {
    if (!store) {
        throw new Error('Store not created')
    }

    return store
}

async function createStoreFolder(storePath: string): Promise<void> {
    if (existsSync(storePath)) return

    try {
        await mkdir(storePath, { recursive: true })
        await writeFile(path.join(storePath, FOLDER_FILES_NAMES.STORE_JSON), JSON.stringify({}))
    } catch (error) {
        if (isErrnoException(error) && error.code === 'EEXIST') return
        throw error
    }
}

export async function createStore(app: Electron.App): Promise<Store> {
    if (store) return store

    const userDataPath = is.dev ? PATHS.DEV_USER_DATA : app.getPath('userData')
    const storePath = path.join(userDataPath, FOLDER_FILES_NAMES.STORE)

    await createStoreFolder(storePath)

    return (store = {
        app,
        folderPath: storePath,
        filePath: path.join(storePath, FOLDER_FILES_NAMES.STORE_JSON),
        tempFilePath: path.join(storePath, FOLDER_FILES_NAMES.STORE_TEMP_JSON),
    })
}

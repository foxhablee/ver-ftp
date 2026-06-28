import { join } from 'node:path'

export const FOLDER_FILES_NAMES = {
    STORE: 'store',
    DEV_USER_DATA: 'dev-user-data',
    STORE_JSON: 'store.json',
    STORE_TEMP_JSON: 'store.temp.json',
} as const

export const PATHS = {
    PRELOAD: join(__dirname, '../preload/index.js'),
    INDEX_HTML: join(__dirname, '../renderer/index.html'),
    DEV_USER_DATA: join(process.cwd(), FOLDER_FILES_NAMES.DEV_USER_DATA),
} as const

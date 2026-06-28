import { join } from 'node:path'

export const PATHS = {
    PRELOAD: join(__dirname, '../preload/index.js'),
    INDEX_HTML: join(__dirname, '../renderer/index.html'),
} as const

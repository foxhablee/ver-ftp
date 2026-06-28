import type { Settings } from '@/shared/model'

export const SETTINGS_STORE_KEY = 'settings' as const

export const DEFAULT_SETTINGS: Settings = {
    theme: 'os',
    language: 'russian',
}

declare module '@/backend/shared/store' {
    interface StoreSchema {
        settings: Settings
    }
}

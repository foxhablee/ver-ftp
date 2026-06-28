import { Settings } from '@/shared/model'
import { storeApi } from '@/backend/shared/store'
import { DEFAULT_SETTINGS, SETTINGS_STORE_KEY } from '../model/settings'

export function settingsGet(): Settings {
    return storeApi.getByToken(SETTINGS_STORE_KEY) ?? DEFAULT_SETTINGS
}

export function settingsChange(props: Partial<Settings>): void {
    storeApi.writeByToken(SETTINGS_STORE_KEY, { ...settingsGet(), ...props })
}

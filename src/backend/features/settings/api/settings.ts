import { Settings } from '@/shared/model'
import { storeApi } from '@/backend/shared/store'
import { STORE_KEY } from '../model/constants'

export function settingsChange(props: Partial<Settings>): void {
    storeApi.writeByToken(STORE_KEY, props)
}

export function settingsGet(): Settings {
    return storeApi.getByToken(STORE_KEY)
}

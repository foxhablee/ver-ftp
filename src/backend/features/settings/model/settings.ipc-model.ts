import { CreateIpcMethod } from '@/shared/ipc'
import { Settings } from '@/shared/model/Settings'

export const SETTINGS_WRITE_METHOD_CHANNEL = 'settings:write' as const

export type SettingsWriteMethod = CreateIpcMethod<{
    channel: typeof SETTINGS_WRITE_METHOD_CHANNEL
    props: Partial<Settings>
}>

export const SETTINGS_GET_METHOD_CHANNEL = 'settings:get' as const

export type SettingsGetMethod = CreateIpcMethod<{
    channel: typeof SETTINGS_GET_METHOD_CHANNEL
    response: Settings
}>

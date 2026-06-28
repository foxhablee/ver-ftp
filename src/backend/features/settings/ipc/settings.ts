import { wrapIpcHandler } from '@/backend/shared/lib'
import {
    SETTINGS_GET_METHOD_CHANNEL,
    SETTINGS_WRITE_METHOD_CHANNEL,
    SettingsGetMethod,
    SettingsWriteMethod,
} from '../model/settings.ipc-model'
import { settingsChange, settingsGet } from '../api/settings'

export const ipcHandlerSettingsGet = wrapIpcHandler<SettingsGetMethod>(SETTINGS_GET_METHOD_CHANNEL, async () => {
    return settingsGet()
})

export const ipcHandlerSettingsWrite = wrapIpcHandler<SettingsWriteMethod>(
    SETTINGS_WRITE_METHOD_CHANNEL,
    async (_event, props) => {
        settingsChange(props)
    },
)

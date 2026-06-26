import { api, ExtractIpcChannelProps, ExtractIpcChannelReturnType, ipcQuery } from '@/renderer/shared/api'

export const localFsApi = api.injectEndpoints({
    endpoints: (build) => ({
        pathContent: build.query<
            ExtractIpcChannelReturnType<'local:path-content'>,
            ExtractIpcChannelProps<'local:path-content'>
        >({
            query: ipcQuery('local:path-content'),
        }),
    }),
})

export const { usePathContentQuery } = localFsApi

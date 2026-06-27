import { api, ExtractIpcChannelProps, ExtractIpcChannelReturnType, ipcQuery } from '@/renderer/shared/api'

export const connectionsApi = api.injectEndpoints({
    endpoints: (build) => ({
        ftpConnect: build.query<ExtractIpcChannelReturnType<'ftp:connect'>, ExtractIpcChannelProps<'ftp:connect'>>({
            query: ipcQuery('ftp:connect'),
        }),
        ftpConnectionsList: build.query<
            ExtractIpcChannelReturnType<'ftp:connections-list'>,
            ExtractIpcChannelProps<'ftp:connections-list'>
        >({
            query: ipcQuery('ftp:connections-list'),
        }),
    }),
})

export const { useFtpConnectQuery, useLazyFtpConnectQuery, useFtpConnectionsListQuery } = connectionsApi

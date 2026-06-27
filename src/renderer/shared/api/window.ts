import { api, ExtractIpcChannelProps, ExtractIpcChannelReturnType, ipcQuery } from './api'

export const windowApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPageId: build.query<ExtractIpcChannelReturnType<'window:get-id'>, ExtractIpcChannelProps<'window:get-id'>>({
            query: ipcQuery('window:get-id'),
            keepUnusedDataFor: 0,
        }),
        closeWindow: build.query<ExtractIpcChannelReturnType<'window:close'>, ExtractIpcChannelProps<'window:close'>>({
            query: ipcQuery('window:close'),
            keepUnusedDataFor: 0,
        }),
        createWindow: build.query<
            ExtractIpcChannelReturnType<'window:create'>,
            ExtractIpcChannelProps<'window:create'>
        >({
            query: ipcQuery('window:create'),
            keepUnusedDataFor: 0,
        }),
    }),
})

export const { useGetPageIdQuery, useLazyGetPageIdQuery, useLazyCloseWindowQuery, useLazyCreateWindowQuery } = windowApi

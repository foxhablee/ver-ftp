import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { ErrorIpcResponse, IpcResponse } from '@/shared/ipc'

type IpcApi = typeof window.api

type IpcApiChannel = keyof IpcApi
export type ExtractIpcChannelProps<TChannel extends IpcApiChannel> = Parameters<IpcApi[TChannel]>[0] extends
    | undefined
    | void
    ? never
    : Parameters<IpcApi[TChannel]>[0]

export type ExtractIpcChannelReturnType<TChannel extends IpcApiChannel> = Extract<
    Awaited<ReturnType<IpcApi[TChannel]>>,
    { ok: true }
>['data']

type BaseQueryProps<TChannel extends IpcApiChannel = IpcApiChannel> = {
    [TInnerChannel in TChannel]: {
        channel: TInnerChannel
        args: ExtractIpcChannelProps<TInnerChannel>
    }
}[TChannel]

type IpcBaseQueryError = Pick<ErrorIpcResponse<string>, 'code' | 'text'>

const ipcBaseQuery: BaseQueryFn<BaseQueryProps, unknown, IpcBaseQueryError> = async ({ channel, args }) => {
    const res = await (window.api[channel] as (args1: typeof args) => Promise<IpcResponse<unknown, string>>)(args)
    return res.ok ? { data: res.data } : { error: { code: res.code, text: res.text } }
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: ipcBaseQuery,
    endpoints: () => ({}),
})

export function ipcQuery<TChannel extends IpcApiChannel>(channel: TChannel) {
    return (args: ExtractIpcChannelProps<TChannel>): BaseQueryProps<TChannel> =>
        ({ channel, args }) as BaseQueryProps<TChannel>
}

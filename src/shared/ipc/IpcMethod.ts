import { IpcResponse } from '@/shared/ipc/IpcResponse'

const IPC_NAMESPACE_FTP = 'ftp' as const
const IPC_NAMESPACE_WINDOW = 'window' as const

export const IPC_METHODS = {
    FTP_CONNECT: `${IPC_NAMESPACE_FTP}:connect`,
    FTP_GET_LIST: `${IPC_NAMESPACE_FTP}:get-list`,
    WINDOW_CREATE: `${IPC_NAMESPACE_WINDOW}:create`,
    WINDOW_GET_ID: `${IPC_NAMESPACE_WINDOW}:get-id`,
    WINDOW_CLOSE: `${IPC_NAMESPACE_WINDOW}:close`,
} as const

export type IpcMethod = (typeof IPC_METHODS)[keyof typeof IPC_METHODS]

export interface IpcMethodLike {
    method: string
    props: unknown
    response: unknown
}

export interface IpcMethodObject {
    channel: string
    props?: unknown
    response?: unknown
    errors?: string
}

export type CreateIpcMethod<T extends IpcMethodObject> = {
    method: T['channel']
    props: T['props'] extends undefined ? void : T['props']
    response: IpcResponse<
        T['response'] extends undefined ? void : T['response'],
        T['errors'] extends string ? T['errors'] : 'error'
    >
}

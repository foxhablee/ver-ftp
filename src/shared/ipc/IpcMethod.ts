import { IpcResponse } from '@/shared/ipc/IpcResponse'

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

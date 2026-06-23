import { IpcResponse } from '@/shared/ipc/IpcResponse'

export interface IpcMethodLike {
    method: string
    props: object | void
    response: unknown
}

export interface IpcMethodObject {
    channel: string
    props?: object | void
    response?: unknown
    errors?: string
}

export type CreateIpcMethod<T extends IpcMethodObject> = {
    method: T['channel']
    props: T['props'] extends object ? T['props'] : void
    response: IpcResponse<
        T['response'] extends undefined ? void : T['response'],
        T['errors'] extends string ? T['errors'] : 'error'
    >
}

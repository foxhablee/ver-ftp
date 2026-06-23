import { IpcResponse } from './IpcResponse'

export interface IpcMethodLike {
    method: string
    props: object | void
    response: IpcResponse<object | void, string | 'errors'>
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
        T['response'] extends object ? T['response'] : void,
        T['errors'] extends string ? T['errors'] | 'error' : 'error'
    >
}

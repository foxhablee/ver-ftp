import { IpcResponse } from './IpcResponse'

export interface IpcMethodLike {
    method: string
    props: object | void
    response: IpcResponse<unknown | void, string | 'errors'>
}

export interface IpcMethodObject {
    channel: string
    props?: object
    response?: unknown
    errors?: string
}

export type CreateIpcMethod<T extends IpcMethodObject> = {
    method: T['channel']
    props: T['props'] extends void ? void : T['props']
    response: IpcResponse<
        T['response'] extends void ? void : T['response'],
        T['errors'] extends string ? T['errors'] | 'error' : 'error'
    >
}

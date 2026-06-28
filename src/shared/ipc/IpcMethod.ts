import { IpcResponse } from './IpcResponse'

export interface IpcMethodLike {
    method: string
    props: object | void
    response: IpcResponse<unknown | void, string | 'errors'>
}

/**
 * Shape of an IPC method contract passed to {@link CreateIpcMethod}.
 *
 * @example
 * ```ts
 * {
 *   channel: 'ftp:get-list' as const,
 *   props: { id: string },
 *   response: { name: string },
 *   errors: 'NOT_EXISTS',
 * }
 * ```
 */
export interface IpcMethodObject {
    /**
     * Literal channel name. Declare with `as const`.
     * @example channel: 'ftp:get-list' as const
     * */
    channel: string
    /** Input payload type. Omit for parameterless methods. */
    props?: object
    /** Success response payload type. Omit if the method returns nothing. */
    response?: unknown
    /** Union of domain error codes. `'error'` is appended automatically as a fallback. */
    errors?: string
}

/**
 * Builds the IPC method type used across `backend/ipc` , `preload/api` and the renderer RTK Query layer.
 * @see {@link IpcMethodObject} for properties description of object passed in generic
 */
export type CreateIpcMethod<T extends IpcMethodObject> = {
    method: T['channel']
    props: T['props'] extends object ? T['props'] : void
    response: IpcResponse<
        T['response'] extends void ? void : T['response'],
        T['errors'] extends string ? T['errors'] | 'error' : 'error'
    >
}

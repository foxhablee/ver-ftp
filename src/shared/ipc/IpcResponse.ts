export type IpcResponse<T> = { ok: true; data: T } | { ok: false; error: string }

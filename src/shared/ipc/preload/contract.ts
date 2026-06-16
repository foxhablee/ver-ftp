export const IPC = {
    FTP_CONNECT: 'ftp:connect',
} as const

export type IpcResponse<T> = { ok: true; data: T } | { ok: false; error: string }

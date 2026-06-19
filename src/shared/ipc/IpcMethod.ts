export const IPC_METHODS = {
    FTP_CONNECT: 'ftp:connect',
} as const

export type IpcMethod = (typeof IPC_METHODS)[keyof typeof IPC_METHODS]

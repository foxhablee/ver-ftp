const IPC_NAMESPACE_FTP = 'ftp' as const

export const IPC_METHODS = {
    FTP_CONNECT: `${IPC_NAMESPACE_FTP}:connect`,
} as const

export type IpcMethod = (typeof IPC_METHODS)[keyof typeof IPC_METHODS]

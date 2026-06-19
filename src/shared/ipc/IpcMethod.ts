const IPC_NAMESPACE_FTP = 'ftp' as const
const IPC_NAMESPACE_SUBWINDOW = 'subwindow' as const

export const IPC_METHODS = {
    FTP_CONNECT: `${IPC_NAMESPACE_FTP}:connect`,
    SUBWINDOW_CREATE: `${IPC_NAMESPACE_SUBWINDOW}:create`,
} as const

export type IpcMethod = (typeof IPC_METHODS)[keyof typeof IPC_METHODS]

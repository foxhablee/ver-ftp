const IPC_NAMESPACE_FTP = 'ftp' as const
const IPC_NAMESPACE_WINDOW = 'window' as const

export const IPC_METHODS = {
    FTP_CONNECT: `${IPC_NAMESPACE_FTP}:connect`,
    FTP_GET_LIST: `${IPC_NAMESPACE_FTP}:get-list`,
    WINDOW_CREATE: `${IPC_NAMESPACE_WINDOW}:create`,
    WINDOW_GET_ID: `${IPC_NAMESPACE_WINDOW}:get-id`,
    WINDOW_CLOSE: `${IPC_NAMESPACE_WINDOW}:close`,
} as const

export type IpcMethod = (typeof IPC_METHODS)[keyof typeof IPC_METHODS]

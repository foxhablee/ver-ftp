export const CONNECTION_PROTOCOLS = {
    FTP: 'ftp',
    SFTP: 'sftp',
    FTPS: 'ftps',
} as const

export type ConnectionProtocol = (typeof CONNECTION_PROTOCOLS)[keyof typeof CONNECTION_PROTOCOLS]

export interface ConnectionItem {
    name: string
    host: string
    port: number
    protocol: ConnectionProtocol
    username: string
    password?: string
    savePassword: boolean
}

export interface RegisteredConnection extends ConnectionItem {
    id: string
}

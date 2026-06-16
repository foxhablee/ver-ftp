export type ConnectionProtocol = 'ftp' | 'sftp' | 'ftps'

export const CONNECTION_PROTOCOL: {
    [Key in Uppercase<ConnectionProtocol>]: Lowercase<Key>
} = {
    FTP: 'ftp',
    SFTP: 'sftp',
    FTPS: 'ftps',
}

export interface ConnectionItem {
    id: string
    name: string
    host: string
    port: number
    protocol: ConnectionProtocol
    username: string
    password?: string
    savePassword: boolean
}

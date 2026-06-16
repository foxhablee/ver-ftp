export type ConnectionProtocol = 'ftp' | 'sftp' | 'ftps'

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

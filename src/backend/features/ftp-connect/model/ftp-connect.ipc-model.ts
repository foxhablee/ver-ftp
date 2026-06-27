import { CreateIpcMethod } from '@/shared/ipc'
import { Connection, ConnectionConfig } from '@/shared/model'

export const FTP_CONNECT_METHOD_CHANNEL = 'ftp:connect' as const

export type FtpConnectMethod = CreateIpcMethod<{
    channel: typeof FTP_CONNECT_METHOD_CHANNEL
    props: ConnectionConfig
    response: Connection
}>

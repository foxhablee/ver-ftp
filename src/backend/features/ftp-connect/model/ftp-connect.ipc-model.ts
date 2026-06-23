import { CreateIpcMethod } from '@/shared/ipc'
import { ConnectionItem } from '@/shared/model'

export const FTP_CONNECT_METHOD_CHANNEL = 'ftp:connect' as const

export type FtpConnectMethod = CreateIpcMethod<{
    channel: typeof FTP_CONNECT_METHOD_CHANNEL
    props: ConnectionItem
    response: { connectionId: string }
}>

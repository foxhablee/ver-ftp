import { CreateIpcMethod } from '@/shared/ipc'
import { Connection } from '@/shared/model'

export const FTP_CONNECTIONS_LIST_CHANNEL = 'ftp:connections-list' as const

export type FtpConnectionsListMethod = CreateIpcMethod<{
    channel: typeof FTP_CONNECTIONS_LIST_CHANNEL
    response: Connection[]
}>

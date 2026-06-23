import { CreateIpcMethod } from '@/shared/ipc'
import { FsItem } from '@/shared/model'

export const FTP_GET_LIST_METHOD_CHANNEL = 'ftp:get-list' as const

export type FtpGetListMethod = CreateIpcMethod<{
    channel: typeof FTP_GET_LIST_METHOD_CHANNEL
    props: { connectionId: string; folder: string }
    response: FsItem[]
}>

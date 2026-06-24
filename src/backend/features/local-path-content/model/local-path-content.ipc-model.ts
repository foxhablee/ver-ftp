import { CreateIpcMethod } from '@/shared/ipc'
import { FsItem } from '@/shared/model'

export const LOCAL_PATH_CONTENT_METHOD_CHANNEL = 'local:path-content' as const

export type LocalPathContentMethod = CreateIpcMethod<{
    channel: typeof LOCAL_PATH_CONTENT_METHOD_CHANNEL
    props: { path: string }
    response: FsItem[]
}>

import { Writable } from 'node:stream'
import { FTPConnection } from '@/shared/model'

interface DownloadFSItemProps {
    connection: FTPConnection
    destination: string | Writable
    remotePath: string
    startAt?: number
}

export async function downloadFSItem(props: DownloadFSItemProps): Promise<void> {
    return void (await props.connection.client.downloadTo(props.destination, props.remotePath, props.startAt))
}

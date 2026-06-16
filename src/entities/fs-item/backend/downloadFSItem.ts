import { FTPConnection } from '@/shared/ftp/backend'
import { Writable } from 'node:stream'

interface DownloadFSItemProps {
    connection: FTPConnection
    destination: string | Writable
    remotePath: string
    startAt?: number
}

export async function downloadFSItem(props: DownloadFSItemProps): Promise<void> {
    return void (await props.connection.client.downloadTo(props.destination, props.remotePath, props.startAt))
}

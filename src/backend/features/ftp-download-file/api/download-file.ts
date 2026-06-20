import { FTPConnection } from '@/backend/shared/model'

interface DownloadFsItemProps {
    connection: FTPConnection
    destination: string
    remotePath: string
    startAt?: number
}

export async function downloadFsItem(props: DownloadFsItemProps): Promise<void> {
    await props.connection.client.downloadTo(props.destination, props.remotePath, props.startAt)
}

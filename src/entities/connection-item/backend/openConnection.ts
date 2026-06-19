import { FTPConnection, createFTPConnect } from '@/shared/ftp/backend'
import { ConnectionItem } from '@/shared/model'

export async function openConnection(options: ConnectionItem): Promise<FTPConnection> {
    return createFTPConnect({
        host: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        secure: options.protocol === 'ftps',
    })
}

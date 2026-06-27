import { ConnectionConfig } from '@/shared/model'
import { FTPConnection } from '@/backend/shared/model'
import { AccessOptions, Client } from 'basic-ftp'

export async function createConnection(options: ConnectionConfig): Promise<FTPConnection> {
    const accessOptions: AccessOptions = {
        host: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        secure: options.protocol === 'ftps',
    }

    const client = new Client()
    client.ftp.verbose = false

    await client.access(accessOptions)
    return { client }
}

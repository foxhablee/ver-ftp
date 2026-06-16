import { AccessOptions, Client } from 'basic-ftp'

export interface FTPConnection {
    client: Client
}

export async function createFTPConnect(options: AccessOptions): Promise<FTPConnection> {
    const client = new Client()
    client.ftp.verbose = false

    await client.access(options)
    return { client }
}

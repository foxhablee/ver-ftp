import { AccessOptions, Client } from 'basic-ftp'

export async function createFTPConnect(options: AccessOptions): Promise<Client> {
    const client = new Client()
    client.ftp.verbose = true

    await client.access(options)
    return client
}

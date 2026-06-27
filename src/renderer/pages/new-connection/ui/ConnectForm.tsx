import React, { useState } from 'react'
import { Button, MenuItem, Select, Stack, TextField } from '@mui/material'
import { CONNECTION_PROTOCOLS, ConnectionConfig, ConnectionProtocol } from '@/shared/model'
import { useLazyCloseWindowQuery, useLazyGetPageIdQuery } from '@/renderer/shared/api'
import { useLazyFtpConnectQuery } from '@/renderer/entities/connection'

function ConnectForm(): React.JSX.Element {
    const [protocol, setProtocol] = useState<ConnectionProtocol>(CONNECTION_PROTOCOLS.FTP)
    const [host, setHost] = useState<string>(import.meta.env.VITE_FTP_TEST_HOST)
    const [port, setPort] = useState(21)
    const [username, setUsername] = useState<string>(import.meta.env.VITE_FTP_TEST_USER)
    const [password, setPassword] = useState<string>(import.meta.env.VITE_FTP_TEST_PASSWORD)
    const [loading, setLoading] = useState<boolean>(false)
    const [getPageId] = useLazyGetPageIdQuery()
    const [closeWindow] = useLazyCloseWindowQuery()
    const [ftpConnect] = useLazyFtpConnectQuery()

    async function submitHandler(e: React.SubmitEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()

        const newConnection: ConnectionConfig = {
            host,
            name: `${protocol}-${host}`,
            port,
            protocol,
            savePassword: true,
            username,
            password,
        }

        setLoading(true)
        const connectionResponse = await ftpConnect(newConnection).unwrap()

        setLoading(false)
        if (connectionResponse) {
            const pageId = await getPageId(undefined, false).unwrap()
            closeWindow({ id: pageId })
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <TextField
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        id='host'
                        label='host'
                        variant='outlined'
                        required
                        size='small'
                        disabled={loading}
                        fullWidth
                    />
                    <TextField
                        id='port'
                        label='port'
                        variant='outlined'
                        required
                        value={port}
                        onChange={(e) => setPort(Number(e.target.value))}
                        size='small'
                        type='number'
                        disabled={loading}
                        fullWidth
                    />
                    <Select
                        sx={{ width: 200 }}
                        id='protocol'
                        label='protocol'
                        variant='outlined'
                        value={protocol}
                        onChange={(e) => setProtocol(e.target.value)}
                        required
                        disabled={loading}
                        size='small'
                    >
                        <MenuItem value={CONNECTION_PROTOCOLS.FTP}>{CONNECTION_PROTOCOLS.FTP}</MenuItem>
                        <MenuItem value={CONNECTION_PROTOCOLS.FTPS}>{CONNECTION_PROTOCOLS.FTPS}</MenuItem>
                        <MenuItem value={CONNECTION_PROTOCOLS.SFTP}>{CONNECTION_PROTOCOLS.SFTP}</MenuItem>
                    </Select>
                </Stack>
                <TextField
                    id='user'
                    label='user'
                    variant='outlined'
                    required
                    size='small'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={loading}
                />
                <TextField
                    id='password'
                    label='password'
                    variant='outlined'
                    required
                    size='small'
                    type='password'
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' variant='outlined' loading={loading}>
                    Подключиться
                </Button>
            </Stack>
        </form>
    )
}

export default ConnectForm

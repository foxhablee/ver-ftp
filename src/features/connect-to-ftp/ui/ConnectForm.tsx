import React, { useState } from 'react'
import { Button, MenuItem, Select, Stack, TextField } from '@mui/material'
import { CONNECTION_PROTOCOLS, ConnectionProtocol } from '@/entities/connection-item'

function ConnectForm(): React.JSX.Element {
    const [protocol, setProtocol] = useState<ConnectionProtocol>(CONNECTION_PROTOCOLS.FTP)
    const [host, setHost] = useState<string>(import.meta.env.VITE_FTP_TEST_HOST)
    const [port, setPort] = useState(21)
    const [username, setUsername] = useState<string>(import.meta.env.VITE_FTP_TEST_USER)
    const [password, setPassword] = useState<string>(import.meta.env.VITE_FTP_TEST_PASSWORD)

    async function submitHandler(e: React.SubmitEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()

        await window.api.ftp.connect({
            host,
            name: `${protocol}-${host}`,
            port,
            protocol,
            savePassword: true,
            username,
            password,
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <Stack spacing={2}>
                <Select
                    id='protocol'
                    label='protocol'
                    variant='outlined'
                    value={protocol}
                    onChange={(e) => setProtocol(e.target.value)}
                    required
                    size='small'
                >
                    <MenuItem value={CONNECTION_PROTOCOLS.FTP}>{CONNECTION_PROTOCOLS.FTP}</MenuItem>
                    <MenuItem value={CONNECTION_PROTOCOLS.FTPS}>{CONNECTION_PROTOCOLS.FTPS}</MenuItem>
                    <MenuItem value={CONNECTION_PROTOCOLS.SFTP}>{CONNECTION_PROTOCOLS.SFTP}</MenuItem>
                </Select>
                <Stack direction='row' spacing={2}>
                    <TextField
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        id='host'
                        label='host'
                        variant='outlined'
                        required
                        size='small'
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
                        fullWidth
                    />
                </Stack>
                <TextField
                    id='user'
                    label='user'
                    variant='outlined'
                    required
                    size='small'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id='password'
                    label='password'
                    variant='outlined'
                    required
                    size='small'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' variant='outlined'>
                    Подключиться
                </Button>
            </Stack>
        </form>
    )
}

export default ConnectForm

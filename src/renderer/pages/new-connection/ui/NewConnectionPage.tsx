import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import ConnectForm from './ConnectForm'

function NewConnectionPage(): React.JSX.Element {
    return (
        <Container sx={{ pt: 3 }}>
            <Stack spacing={2}>
                <Typography variant='h5'>Новое подключение</Typography>
                <ConnectForm />
            </Stack>
        </Container>
    )
}

export default NewConnectionPage

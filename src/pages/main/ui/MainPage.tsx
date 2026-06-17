import React from 'react'
import { Stack } from '@mui/material'
import { Toolbar } from '@/widgets/toolbar'

function MainPage(): React.JSX.Element {
    return (
        <Stack sx={{ height: '100%' }} direction='row'>
            <Toolbar side='left' />
            <Stack sx={{ width: '100%' }}></Stack>
            <Toolbar side='right' />
        </Stack>
    )
}

export default MainPage

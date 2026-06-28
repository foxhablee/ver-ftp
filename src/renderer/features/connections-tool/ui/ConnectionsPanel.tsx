import React from 'react'
import { Button } from '@mui/material'
import { useWindowApi } from '@/renderer/shared/lib'

function ConnectionsPanel(): React.JSX.Element {
    const { openNewWindow } = useWindowApi()

    return (
        <>
            <Button variant='outlined' type='button' onClick={() => openNewWindow('new-connection')}>
                Создать подключение
            </Button>
        </>
    )
}

export default ConnectionsPanel

import React from 'react'
import { Button } from '@mui/material'

function ConnectionsPanel(): React.JSX.Element {
    function clickHandler(): void {
        window.api.window.create({ page: 'new-connection' })
    }

    return (
        <>
            <Button variant='outlined' type='button' onClick={clickHandler}>
                Создать подключение
            </Button>
        </>
    )
}

export default ConnectionsPanel

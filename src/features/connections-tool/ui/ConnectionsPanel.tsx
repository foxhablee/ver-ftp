import React from 'react'
import { Button } from '@mui/material'

function ConnectionsPanel(): React.JSX.Element {
    function clickHandler(): void {
        window.api.window.create({ page: '/tool/connections' })
    }

    return (
        <>
            <Button variant='outlined' type='button' onClick={clickHandler}>
                Подключиться
            </Button>
        </>
    )
}

export default ConnectionsPanel

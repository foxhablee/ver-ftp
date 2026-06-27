import React from 'react'
import { Button } from '@mui/material'
import { useLazyCreateWindowQuery } from '@/renderer/shared/api'

function ConnectionsPanel(): React.JSX.Element {
    const [createWindow] = useLazyCreateWindowQuery()

    function clickHandler(): void {
        createWindow({ page: 'new-connection' })
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

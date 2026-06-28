import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { useWindowApi } from '@/renderer/shared/lib'

interface Props {
    open: boolean
}

function ConnectionsMenu({ open }: Props): React.JSX.Element {
    const { openNewWindow } = useWindowApi()

    return (
        <Menu open={open}>
            <MenuItem>Local</MenuItem>
            <MenuItem onClick={() => openNewWindow('new-connection')}>New connection</MenuItem>
        </Menu>
    )
}

export default ConnectionsMenu

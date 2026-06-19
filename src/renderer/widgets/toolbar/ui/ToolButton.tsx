import React, { PropsWithChildren } from 'react'
import { IconButton, Tooltip } from '@mui/material'

type Props = PropsWithChildren & {
    tooltip: string
    position: 'left' | 'right'
    onClick: () => void
    active?: boolean
}

function ToolButton({ tooltip, position, onClick, active, children }: Props): React.JSX.Element {
    return (
        <Tooltip title={tooltip} placement={position === 'left' ? 'right' : 'left'}>
            <IconButton size='small' onClick={onClick} color={active ? 'primary' : 'default'}>
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default ToolButton

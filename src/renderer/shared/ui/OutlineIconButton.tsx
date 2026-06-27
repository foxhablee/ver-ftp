import React from 'react'
import { IconButton, IconButtonProps, SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type IconComponent = OverridableComponent<SvgIconTypeMap> & {
    muiName: string
}

type Props = IconButtonProps & {
    icon: IconComponent
}

function OutlineIconButton({ icon, ...props }: Props): React.JSX.Element {
    const Icon = icon

    return (
        <IconButton size='small' {...props}>
            <Icon fontSize='small' />
        </IconButton>
    )
}

export default OutlineIconButton

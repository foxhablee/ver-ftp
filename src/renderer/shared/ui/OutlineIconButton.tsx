import React from 'react'
import { IconButton, IconButtonProps, SvgIconTypeMap, SxProps, Theme } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

const buttonSx = (theme: Theme) =>
    ({
        p: 0.5,
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: 2,
    }) as const satisfies SxProps<Theme>

type IconComponent = OverridableComponent<SvgIconTypeMap> & {
    muiName: string
}

type Props = IconButtonProps & {
    icon: IconComponent
}

function OutlineIconButton({ icon, ...props }: Props): React.JSX.Element {
    const Icon = icon

    return (
        <IconButton sx={buttonSx} size='small' {...props}>
            <Icon fontSize='small' />
        </IconButton>
    )
}

export default OutlineIconButton

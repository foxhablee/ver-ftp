import React from 'react'
import { SxProps, Theme, Typography } from '@mui/material'
import { Breadcrumb } from '../model/Breadcrumb'

const slashSx = () =>
    ({
        cursor: 'default',
        ':first-of-type': {
            display: 'none',
        },
    }) as const satisfies SxProps<Theme>

const breadcrumbSx = (theme: Theme) =>
    ({
        p: 0.4,
        borderRadius: 2,
        width: 'fit-content',
        ':hover': {
            cursor: 'pointer',
            bgcolor: theme.palette.grey.A100,
        },
        ':last-child': {
            opacity: 0.5,
            cursor: 'default',
            bgcolor: 'transparent',
        },
    }) as const satisfies SxProps<Theme>

interface Props extends Breadcrumb {
    onClick: () => void
}

function BreadcrumbItem({ name, onClick }: Props): React.JSX.Element {
    return (
        <>
            <Typography sx={slashSx} variant='caption'>
                /
            </Typography>
            <Typography sx={breadcrumbSx} variant='caption' onClick={onClick}>
                {name}
            </Typography>
        </>
    )
}

export default BreadcrumbItem

import React from 'react'
import { FsItem } from '@/shared/model'
import { Stack, SxProps, Theme, Typography } from '@mui/material'
import FsItemIcon from './FsItemIcon'

const itemSx = (theme: Theme) =>
    ({
        py: 0.5,
        alignItems: 'center',
        ':hover ': {
            '.MuiSvgIcon-root': {
                color: theme.palette.primary.main,
            },
            cursor: 'pointer',
            background: theme.palette.grey.A100,
        },
    }) as const satisfies SxProps<Theme>

interface Props {
    item: FsItem
    onClick?: (item: FsItem) => void
}

function FsListItem({ item, onClick }: Props): React.JSX.Element {
    return (
        <Stack sx={itemSx} direction='row' spacing={0.5} onClick={() => onClick?.(item)}>
            <FsItemIcon type={item.kind} />
            <Typography variant='body2'>{item.name}</Typography>
        </Stack>
    )
}

export default FsListItem

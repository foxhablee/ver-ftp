import React from 'react'
import { useDispatch } from 'react-redux'
import { IconButton, Stack, SxProps, Typography } from '@mui/material'
import { CLOSE_BUTTON_CLASSNAME } from '../model/constants'
import { closeTab } from '../model/store'

import CloseIcon from '@mui/icons-material/Close'

const innerSx = {
    alignItems: 'center',
    '.MuiIconButton-root': {
        opacity: 0,
        transition: 'opacity 150ms ease-in-out',
    },
    ':hover': {
        '.MuiIconButton-root': {
            opacity: 1,
        },
    },
} as const satisfies SxProps

interface Props {
    label: string
    id: string
}

function TabInner({ label, id }: Props): React.JSX.Element {
    const dispatch = useDispatch()

    return (
        <Stack sx={innerSx} direction='row' spacing={0.5}>
            <Typography>{label}</Typography>
            <IconButton
                className={CLOSE_BUTTON_CLASSNAME}
                component='span'
                size='small'
                onClick={() => dispatch(closeTab(id))}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </Stack>
    )
}

export default TabInner

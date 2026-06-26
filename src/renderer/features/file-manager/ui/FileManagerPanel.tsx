import React, { useContext } from 'react'
import { IconButton, Stack, SxProps, Theme, Typography } from '@mui/material'
import { FileManagerContext } from '../model/FileManagerContext'
import { usePathContentQuery } from '@/renderer/entities/fs-item'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CachedIcon from '@mui/icons-material/Cached'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

const titleSx = (theme: Theme) =>
    ({
        alignItems: 'center',
        ':hover': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
        },
    }) as const satisfies SxProps<Theme>

function FileManagerPanel(): React.JSX.Element {
    const { connectionId, path } = useContext(FileManagerContext)
    const { refetch } = usePathContentQuery({ path: path.join('/') })

    const name = connectionId === -1 ? 'local' : `connection ${connectionId}`

    return (
        <Stack sx={{ mt: 1, mb: 2 }}>
            <Stack sx={titleSx} direction='row' spacing={0.3}>
                <Typography variant='h6'>{name}</Typography>
                <ExpandMoreIcon />
            </Stack>
            <Stack direction='row'>
                <IconButton size='small' onClick={refetch}>
                    <CachedIcon />
                </IconButton>
                <IconButton size='small'>
                    <CreateNewFolderIcon />
                </IconButton>
                <IconButton size='small'>
                    <NoteAddIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default FileManagerPanel

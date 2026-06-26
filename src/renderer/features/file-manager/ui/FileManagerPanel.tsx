import React, { useContext } from 'react'
import { Divider, IconButton, Stack, SxProps, Theme, Typography } from '@mui/material'
import { usePathContentQuery } from '@/renderer/entities/fs-item'
import { FileManagerContext } from '../model/FileManagerContext'
import FileManagerBreadcrumbs from './FileManagerBreadcrumbs'

import CachedIcon from '@mui/icons-material/Cached'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'

const titleSx = (theme: Theme) =>
    ({
        alignItems: 'center',
        ':hover': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
        },
    }) as const satisfies SxProps<Theme>

const panelSx = (theme: Theme) =>
    ({
        pb: 2,
        position: 'sticky',
        top: 0,
        pt: 1,
        bgcolor: theme.palette.background.default,
    }) as const satisfies SxProps<Theme>

function FileManagerPanel(): React.JSX.Element {
    const { connectionId, path } = useContext(FileManagerContext)
    const { refetch } = usePathContentQuery({ path: path.join('/') })

    const name = connectionId === -1 ? 'local' : `connection ${connectionId}`

    return (
        <Stack sx={panelSx}>
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
            <FileManagerBreadcrumbs />
            <Divider />
        </Stack>
    )
}

export default FileManagerPanel

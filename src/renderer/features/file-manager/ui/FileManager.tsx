import React from 'react'
import { Stack, SxProps, Theme } from '@mui/material'
import FileManagerProvider from './FileManagerProvider'
import FileManagerList from './FileManagerList'
import FileManagerPanel from './FileManagerPanel'

const fileManagerSx = (theme: Theme) =>
    ({
        px: 1,
        height: '100%',
        overflow: 'auto',
        width: '100%',
        ':not(:first-of-type)': {
            borderLeft: '1px solid',
            borderLeftColor: theme.palette.divider,
        },
    }) as const satisfies SxProps<Theme>

function FileManager(): React.JSX.Element {
    return (
        <FileManagerProvider connectionId={-1}>
            <Stack sx={fileManagerSx}>
                <FileManagerPanel />
                <FileManagerList />
            </Stack>
        </FileManagerProvider>
    )
}

export default FileManager

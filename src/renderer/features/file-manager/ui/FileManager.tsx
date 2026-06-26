import React from 'react'
import FileManagerProvider from './FileManagerProvider'
import FileManagerList from './FileManagerList'
import FileManagerPanel from '@/renderer/features/file-manager/ui/FileManagerPanel'
import { Stack } from '@mui/material'

function FileManager(): React.JSX.Element {
    return (
        <FileManagerProvider connectionId={-1}>
            <Stack sx={{ px: 1 }}>
                <FileManagerPanel />
                <FileManagerList />
            </Stack>
        </FileManagerProvider>
    )
}

export default FileManager

import React from 'react'
import { Stack } from '@mui/material'
import { FileManager } from '@/renderer/features/file-manager'
import { ContentInTabs, NewTab } from '@/renderer/features/tabs'

const DEFAULT_TAB: NewTab = {
    name: 'local | local',
}

function FileManagerTabs(): React.JSX.Element {
    return (
        <ContentInTabs defaultNewTab={DEFAULT_TAB} newTabOnMount>
            <Stack sx={{ height: '100%' }} direction='row'>
                <FileManager />
                <FileManager />
            </Stack>
        </ContentInTabs>
    )
}

export default FileManagerTabs

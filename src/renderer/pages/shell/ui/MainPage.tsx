import React from 'react'
import { Stack } from '@mui/material'
import Toolbar from './Toolbar'

import { bookmarksTool } from '@/renderer/features/bookmarks-tool'
import { connectionsTool } from '@/renderer/features/connections-tool'
import { gitHistoryTool } from '@/renderer/features/git-history-tool'
import { FileManager } from '@/renderer/features/file-manager'

function MainPage(): React.JSX.Element {
    return (
        <Stack sx={{ height: '100%' }} direction='row'>
            <Toolbar side='left' tools={[bookmarksTool]} />
            <Stack sx={{ width: '100%' }}>
                <FileManager />
            </Stack>
            <Toolbar side='right' tools={[connectionsTool, gitHistoryTool]} />
        </Stack>
    )
}

export default MainPage

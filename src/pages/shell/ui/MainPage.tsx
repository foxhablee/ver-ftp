import React from 'react'
import { Stack } from '@mui/material'
import { Toolbar } from '@/widgets/toolbar'

import { bookmarksTool } from '@/features/bookmarks-tool'
import { connectionsTool } from '@/features/connections-tool'
import { gitHistoryTool } from '@/features/git-history-tool'

function MainPage(): React.JSX.Element {
    return (
        <Stack sx={{ height: '100%' }} direction='row'>
            <Toolbar side='left' tools={[bookmarksTool]} />
            <Stack sx={{ width: '100%' }}></Stack>
            <Toolbar side='right' tools={[connectionsTool, gitHistoryTool]} />
        </Stack>
    )
}

export default MainPage

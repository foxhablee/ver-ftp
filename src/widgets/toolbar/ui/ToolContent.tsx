import React, { PropsWithChildren } from 'react'
import { Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface Props extends PropsWithChildren {
    title: string
}

function ToolContent({ title, children }: Props): React.JSX.Element {
    return (
        <Paper sx={{ p: 1, width: 290 }}>
            <Stack>
                <Stack sx={{ alignItems: 'center', justifyContent: 'space-between' }} direction='row'>
                    <Typography variant='subtitle2'>{title}</Typography>
                    <Stack direction='row'>
                        <IconButton size='small'>
                            <MoreVertIcon />
                        </IconButton>
                    </Stack>
                </Stack>
                <Divider sx={{ marginBottom: 2 }} />
                {children}
            </Stack>
        </Paper>
    )
}

export default ToolContent

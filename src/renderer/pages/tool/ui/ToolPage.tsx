import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { getRouteApi, Outlet } from '@tanstack/react-router'

const route = getRouteApi('/tool/$toolId')

function ToolPage(): React.JSX.Element {
    const { toolId } = route.useParams()

    return (
        <Paper>
            <Typography>{toolId}</Typography>
            <Stack>
                <Outlet />
            </Stack>
        </Paper>
    )
}

export default ToolPage

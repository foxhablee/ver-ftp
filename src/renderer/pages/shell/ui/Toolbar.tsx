import React, { Activity, Fragment, useState } from 'react'
import { Paper, Stack } from '@mui/material'

import ToolButton from './ToolButton'
import ToolContent from './ToolContent'
import { Tool } from '@/renderer/shared/model'

interface Props {
    side: 'left' | 'right'
    tools: Tool[]
}

function Toolbar({ tools, side }: Props): React.JSX.Element {
    const [activeTool, setActiveTool] = useState<Tool | null>(null)

    function toggleActiveTool(tool: Tool): void {
        setActiveTool((prev) => {
            if (prev?.id === tool.id) return null

            return tool
        })
    }

    const ActivePanel = activeTool?.Panel || Fragment

    return (
        <Paper variant='outlined'>
            <Stack sx={{ height: '100%' }} direction={side === 'left' ? 'row-reverse' : 'row'}>
                <Activity mode={activeTool ? 'visible' : 'hidden'}>
                    <ToolContent title={activeTool?.title || ''}>
                        <ActivePanel />
                    </ToolContent>
                </Activity>
                <Paper variant='outlined'>
                    <Stack>
                        {tools.map((tool) => (
                            <ToolButton
                                key={tool.id}
                                tooltip={tool.title}
                                position={side}
                                active={activeTool?.id === tool.id}
                                onClick={() => toggleActiveTool(tool)}
                            >
                                {tool.icon}
                            </ToolButton>
                        ))}
                    </Stack>
                </Paper>
            </Stack>
        </Paper>
    )
}

export default Toolbar

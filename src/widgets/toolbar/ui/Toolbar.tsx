import React, { Activity, useState } from 'react'
import { Paper, Stack } from '@mui/material'

import ToolButton from './ToolButton'
import ToolContent from './ToolContent'
import { Tool, TOOLS } from '../model/Tool'

import CableIcon from '@mui/icons-material/Cable'
import TimelineIcon from '@mui/icons-material/Timeline'
import StarIcon from '@mui/icons-material/Star'

interface Props {
    side: 'left' | 'right'
}

function Toolbar(props: Props): React.JSX.Element {
    const [activeTool, setActiveTool] = useState<Tool | null>(null)

    function toggleActiveTool(tool: Tool): void {
        setActiveTool((prev) => {
            if (prev === tool) return null

            return tool
        })
    }

    return (
        <Paper variant='outlined'>
            <Stack sx={{ height: '100%' }} direction={props.side === 'left' ? 'row-reverse' : 'row'}>
                <Activity mode={activeTool ? 'visible' : 'hidden'}>
                    <ToolContent title={activeTool!}>test</ToolContent>
                </Activity>
                <Paper variant='outlined'>
                    <Stack>
                        <Activity mode={props.side === 'left' ? 'hidden' : 'visible'}>
                            <ToolButton
                                tooltip='Подключения'
                                position={props.side}
                                active={activeTool === TOOLS.CONNECTIONS}
                                onClick={() => toggleActiveTool(TOOLS.CONNECTIONS)}
                            >
                                <CableIcon />
                            </ToolButton>
                            <ToolButton
                                tooltip='История изменений'
                                position={props.side}
                                active={activeTool === TOOLS.GIT_HISTORY}
                                onClick={() => toggleActiveTool(TOOLS.GIT_HISTORY)}
                            >
                                <TimelineIcon />
                            </ToolButton>
                        </Activity>
                        <Activity mode={props.side === 'right' ? 'hidden' : 'visible'}>
                            <ToolButton
                                tooltip='Закладки'
                                position={props.side}
                                active={activeTool === TOOLS.BOOKMARKS}
                                onClick={() => toggleActiveTool(TOOLS.BOOKMARKS)}
                            >
                                <StarIcon />
                            </ToolButton>
                        </Activity>
                    </Stack>
                </Paper>
            </Stack>
        </Paper>
    )
}

export default Toolbar

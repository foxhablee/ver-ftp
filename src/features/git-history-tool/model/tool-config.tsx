import { Fragment } from 'react'
import { Tool } from '@/shared/model'
import TimelineIcon from '@mui/icons-material/Timeline'
import { TOOL_ID_GIT_HISTORY } from './tool-id'

export const gitHistoryTool: Tool = {
    id: TOOL_ID_GIT_HISTORY,
    title: 'История изменений',
    side: 'right',
    Panel: Fragment,
    icon: <TimelineIcon />,
}

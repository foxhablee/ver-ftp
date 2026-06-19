import { Fragment } from 'react'
import { Tool, TOOLS_IDS } from '@/shared/model'
import TimelineIcon from '@mui/icons-material/Timeline'

export const gitHistoryTool: Tool = {
    id: TOOLS_IDS.GIT_HISTORY,
    title: 'История изменений',
    side: 'right',
    Panel: Fragment,
    icon: <TimelineIcon />,
}

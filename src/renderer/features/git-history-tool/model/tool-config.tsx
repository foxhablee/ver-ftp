import { Fragment } from 'react'
import { TOOLS_IDS } from '@/shared/model'
import { Tool } from '@/renderer/shared/model'
import TimelineIcon from '@mui/icons-material/Timeline'

export const gitHistoryTool: Tool = {
    id: TOOLS_IDS.GIT_HISTORY,
    title: 'История изменений',
    side: 'right',
    Panel: Fragment,
    icon: <TimelineIcon />,
}

import { Fragment } from 'react'
import { Tool } from '@/shared/model'
import TimelineIcon from '@mui/icons-material/Timeline'

export const gitHistoryTool: Tool = {
    id: 'git-history',
    title: 'История изменений',
    side: 'right',
    Panel: Fragment,
    icon: <TimelineIcon />,
}

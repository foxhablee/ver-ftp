import { Fragment } from 'react'
import { Tool, TOOLS_IDS } from '@/shared/model'
import StarIcon from '@mui/icons-material/Star'

export const bookmarksTool: Tool = {
    id: TOOLS_IDS.BOOKMARKS,
    title: 'Закладки',
    side: 'left',
    Panel: Fragment,
    icon: <StarIcon />,
}

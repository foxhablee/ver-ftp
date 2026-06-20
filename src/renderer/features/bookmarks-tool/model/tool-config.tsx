import { Fragment } from 'react'
import { TOOLS_IDS } from '@/shared/model'
import { Tool } from '@/renderer/shared/model'
import StarIcon from '@mui/icons-material/Star'

export const bookmarksTool: Tool = {
    id: TOOLS_IDS.BOOKMARKS,
    title: 'Закладки',
    side: 'left',
    Panel: Fragment,
    icon: <StarIcon />,
}

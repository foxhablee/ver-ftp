import { Fragment } from 'react'
import { Tool } from '@/shared/model'
import StarIcon from '@mui/icons-material/Star'
import { TOOL_ID_BOOKMARKS } from '@/features/bookmarks-tool/model/tool-id'

export const bookmarksTool: Tool = {
    id: TOOL_ID_BOOKMARKS,
    title: 'Закладки',
    side: 'left',
    Panel: Fragment,
    icon: <StarIcon />,
}

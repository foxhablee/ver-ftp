import { Fragment } from 'react'
import { Tool } from '@/shared/model'
import StarIcon from '@mui/icons-material/Star'

export const bookmarksTool: Tool = {
    id: 'bookmarks',
    title: 'Закладки',
    side: 'left',
    Panel: Fragment,
    icon: <StarIcon />,
}

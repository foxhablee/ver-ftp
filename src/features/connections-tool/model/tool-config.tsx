import { Fragment } from 'react'
import { Tool } from '@/shared/model'
import CableIcon from '@mui/icons-material/Cable'

export const connectionsTool: Tool = {
    id: 'connections',
    title: 'Подключения',
    side: 'right',
    Panel: Fragment,
    icon: <CableIcon />,
}

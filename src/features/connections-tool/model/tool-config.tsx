import { Tool } from '@/shared/model'
import CableIcon from '@mui/icons-material/Cable'
import ConnectionsPanel from '../ui/ConnectionsPanel'

export const connectionsTool: Tool = {
    id: 'connections',
    title: 'Подключения',
    side: 'right',
    Panel: ConnectionsPanel,
    icon: <CableIcon />,
}

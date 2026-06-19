import { Tool, TOOLS_IDS } from '@/shared/model'
import CableIcon from '@mui/icons-material/Cable'
import ConnectionsPanel from '../ui/ConnectionsPanel'

export const connectionsTool: Tool = {
    id: TOOLS_IDS.CONNECTIONS,
    title: 'Подключения',
    side: 'right',
    Panel: ConnectionsPanel,
    icon: <CableIcon />,
}

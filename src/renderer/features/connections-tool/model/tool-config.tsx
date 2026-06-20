import { TOOLS_IDS } from '@/shared/model'
import { Tool } from '@/renderer/shared/model'
import CableIcon from '@mui/icons-material/Cable'
import ConnectionsPanel from '../ui/ConnectionsPanel'

export const connectionsTool: Tool = {
    id: TOOLS_IDS.CONNECTIONS,
    title: 'Подключения',
    side: 'right',
    Panel: ConnectionsPanel,
    icon: <CableIcon />,
}

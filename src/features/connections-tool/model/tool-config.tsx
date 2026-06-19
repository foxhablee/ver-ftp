import { Tool } from '@/shared/model'
import CableIcon from '@mui/icons-material/Cable'
import ConnectionsPanel from '../ui/ConnectionsPanel'
import { TOOL_ID_CONNECTIONS } from '@/features/connections-tool/model/tool-id'

export const connectionsTool: Tool = {
    id: TOOL_ID_CONNECTIONS,
    title: 'Подключения',
    side: 'right',
    Panel: ConnectionsPanel,
    icon: <CableIcon />,
}

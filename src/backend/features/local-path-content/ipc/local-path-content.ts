import { wrapIpcHandler } from '@/backend/shared/lib'
import {
    LOCAL_PATH_CONTENT_METHOD_CHANNEL,
    LocalPathContentMethod,
} from '@/backend/features/local-path-content/model/local-path-content.ipc-model'
import { pathContent } from '@/backend/features/local-path-content/api/path-content'

export const ipcHandlerLocalPathContent = wrapIpcHandler<LocalPathContentMethod>(
    LOCAL_PATH_CONTENT_METHOD_CHANNEL,
    (_, props) => {
        return pathContent(props.path)
    },
)

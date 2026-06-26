import React, { PropsWithChildren, useState } from 'react'
import { FileManagerContext, FileManageContextValue } from '../model/FileManagerContext'

type Props = Pick<FileManageContextValue, 'connectionId'> & PropsWithChildren

function FileManagerProvider({ children, connectionId: initConnectionId }: Props): React.JSX.Element {
    const [connectionId, setConnectionId] = useState(initConnectionId)
    const [path, setPath] = useState<string[]>(connectionId === -1 ? ['C:/'] : [])

    return (
        <FileManagerContext.Provider value={{ connectionId, setConnectionId, path, setPath }}>
            {children}
        </FileManagerContext.Provider>
    )
}

export default FileManagerProvider

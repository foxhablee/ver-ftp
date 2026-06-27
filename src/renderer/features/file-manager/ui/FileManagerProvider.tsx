import React, { PropsWithChildren, useState } from 'react'
import { FileManagerContext } from '../model/FileManagerContext'

type Props = PropsWithChildren

function FileManagerProvider({ children }: Props): React.JSX.Element {
    const [path, setPath] = useState<string[]>(['C:'])

    return <FileManagerContext.Provider value={{ path, setPath }}>{children}</FileManagerContext.Provider>
}

export default FileManagerProvider

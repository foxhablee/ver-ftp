import React from 'react'
import { FsItemKind } from '@/shared/model'
import FileIcon from '@mui/icons-material/InsertDriveFileOutlined'
import FolderIcon from '@mui/icons-material/FolderOutlined'
import SymbolicIcon from '@mui/icons-material/FileOpenOutlined'

interface Props {
    type: FsItemKind
}

function FsItemIcon({ type }: Props): React.JSX.Element {
    switch (type) {
        case 'directory':
            return <FolderIcon color='disabled' fontSize='small' />
        case 'symbolic':
            return <SymbolicIcon color='disabled' fontSize='small' />
        case 'file':
        case 'unknown':
        default:
            return <FileIcon color='disabled' fontSize='small' />
    }
}

export default FsItemIcon

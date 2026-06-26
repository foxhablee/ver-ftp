import React, { useCallback, useContext } from 'react'
import { FsItem } from '@/shared/model'
import { Stack } from '@mui/material'
import { FsListItem, usePathContentQuery } from '@/renderer/entities/fs-item'
import { FileManagerContext } from '../model/FileManagerContext'

const PREVIOUS_PATH_ITEM: FsItem = {
    name: '..',
    path: '',
    kind: 'directory',
}

function FileManagerList(): React.JSX.Element {
    const { setPath, path } = useContext(FileManagerContext)
    const { data } = usePathContentQuery({ path: path.join('/') })

    const list = data || []

    const clickHandler = useCallback(
        function (item: FsItem) {
            if (item.kind !== 'directory') return

            if (item.name === PREVIOUS_PATH_ITEM.name) {
                return setPath(path.slice(0, -1))
            }

            setPath([item.path.split('/'), item.name].flat())
        },
        [path],
    )

    return (
        <Stack>
            <FsListItem item={PREVIOUS_PATH_ITEM} onClick={clickHandler} />
            {list.map((i) => (
                <FsListItem key={`${i.path}/${i.name}`} item={i} onClick={clickHandler} />
            ))}
        </Stack>
    )
}

export default FileManagerList

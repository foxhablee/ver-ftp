import React, { useContext } from 'react'
import { Stack } from '@mui/material'
import { FileManagerContext } from '../model/FileManagerContext'
import { convertPathToBreadcrumbs } from '../lib/ConvertPathToBreadcrumbs'
import BreadcrumbItem from './BreadcrumbItem'

function FileManagerBreadcrumbs(): React.JSX.Element {
    const { path, setPath } = useContext(FileManagerContext)

    return (
        <Stack sx={{ flexWrap: 'wrap', alignItems: 'center' }} direction='row'>
            {convertPathToBreadcrumbs(path).map((breadcrumb) => (
                <BreadcrumbItem
                    key={breadcrumb.path.join('/')}
                    onClick={() => setPath(breadcrumb.path)}
                    {...breadcrumb}
                />
            ))}
        </Stack>
    )
}

export default FileManagerBreadcrumbs

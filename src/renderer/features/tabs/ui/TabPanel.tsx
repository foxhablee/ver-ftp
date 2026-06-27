import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    id: string
    activeTabId: string | false
}

function TabPanel({ id, activeTabId, children }: Props): React.JSX.Element {
    return <div hidden={id !== activeTabId}>{children}</div>
}

export default TabPanel

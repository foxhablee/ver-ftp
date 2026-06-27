import React, { PropsWithChildren, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Stack, SxProps, Tab, Tabs, Theme } from '@mui/material'
import { closeAllTabs, createTab, selectActiveTabId, selectTabs, setActiveTabId } from '../model/store'
import { CLOSE_BUTTON_CLASSNAME } from '../model/constants'
import { NewTab } from '../model/TabItem'
import TabPanel from './TabPanel'
import TabInner from './TabInner'

import AddIcon from '@mui/icons-material/Add'

const tabsSx = {
    minHeight: 'auto',
    '.MuiTabScrollButton-horizontal.Mui-disabled': {
        display: 'none',
    },
    '.MuiTab-root': {
        py: 0.3,
        pr: 0,
        minHeight: 'auto',
    },
} as const satisfies SxProps<Theme>

interface Props extends PropsWithChildren {
    defaultNewTab: NewTab
    newTabOnMount?: boolean
}

function ContentInTabs({ children, defaultNewTab, newTabOnMount }: Props): React.JSX.Element {
    const dispatch = useDispatch()
    const tabs = useSelector(selectTabs)
    const activeTabId = useSelector(selectActiveTabId)

    const changeTab = (event: React.SyntheticEvent, newTabIndex: string): void => {
        const closeButton = event.currentTarget.querySelector(`.${CLOSE_BUTTON_CLASSNAME}`)

        if (event.target instanceof Node && closeButton?.contains(event.target)) {
            return event.preventDefault()
        }

        dispatch(setActiveTabId(newTabIndex))
    }

    const newTab = (): void => {
        dispatch(createTab(defaultNewTab))
    }

    useEffect(() => {
        if (newTabOnMount) newTab()

        return () => void dispatch(closeAllTabs())
    }, [])

    return (
        <Stack>
            <Stack direction='row'>
                <Tabs sx={tabsSx} value={activeTabId} onChange={changeTab} variant='scrollable' scrollButtons='auto'>
                    {tabs.map((tab) => (
                        <Tab key={tab.id} label={<TabInner label={tab.name} id={tab.id} />} value={tab.id} />
                    ))}
                </Tabs>
                <IconButton onClick={newTab} size='small'>
                    <AddIcon fontSize='small' />
                </IconButton>
            </Stack>
            <Stack>
                {tabs.map((tab) => (
                    <TabPanel key={tab.id} id={tab.id} activeTabId={activeTabId}>
                        {children}
                    </TabPanel>
                ))}
            </Stack>
        </Stack>
    )
}

export default ContentInTabs

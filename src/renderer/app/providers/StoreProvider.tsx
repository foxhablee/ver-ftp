import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

function StoreProvider({ children }: PropsWithChildren): React.JSX.Element {
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider

import React from 'react'
import {Provider} from 'react-redux'
import { Main } from './components/Main'
import { store } from './store/store'

export const EnglishApp = () => {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    )
}

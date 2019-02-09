import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'react-hot-loader/patch'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Root from './routes'
import { store, persister } from './stores'

export class AppContainer {
    initialize() {
        ReactDOM.render(
            <Provider store={store}>
                <PersistGate loading="loading..." persistor={persister}>
                    <Root />
                </PersistGate>
            </Provider>,
            document.getElementById('main'),
        )
    }
}

new AppContainer().initialize()

if ( module.hot ) {
    module.hot.accept((err: any) => {
        if (err) {
            console.error(err)
        }
    })
}
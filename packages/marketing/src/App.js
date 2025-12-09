import React from 'react'
import { Switch, Route, BroserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import Landing from './components/Landing.js'
import Pricing from './components/Pricing.js'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'

export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                     </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
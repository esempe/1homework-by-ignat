import React from 'react'
import Header from './Header'
import Routess from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {

    let HeaderStyle={
        position:'relative',
        color:'black'
    }
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header />

            <Routess/>

            </HashRouter>
        </div>
    )
}

export default HW5

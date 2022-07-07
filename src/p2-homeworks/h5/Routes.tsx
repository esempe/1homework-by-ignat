import React from 'react'
import {Route,Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import App from "../../p1-main/m1-ui/u1-app/App";
import HW5 from "./HW5";
import {Junior} from "./pages/Junior";
import {JuniorProMax} from "./pages/JuniorProMax";

export const PATH = {
    PRE_JUNIOR: '/',
    JUNIOR: '/junior',
    JUNIOR_PRO_MAX: '/junior_pro_max'
    // add paths
}

function Routess() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            {/*<Switch>*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            {/*</Switch>*/}
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>} />
                <Route path={PATH.JUNIOR} element={<Junior/>} />
                <Route path={PATH.JUNIOR_PRO_MAX} element={<JuniorProMax/>} />
            </Routes>
        </div>
    )
}

export default Routess

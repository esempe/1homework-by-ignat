import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from "./Header.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <div className={style.NavBarWrapperWrapper}>
            <div className={style.NavBarWrapper}>
                <div className={style.NavBar}>
                    <div className={style.NavLinks}><NavLink to={PATH.PRE_JUNIOR}>
                        <SuperButton>
                            preJunior
                        </SuperButton>
                    </NavLink>
                        <NavLink to={PATH.JUNIOR}>
                            <SuperButton>
                                Junior
                            </SuperButton>
                        </NavLink>
                        <NavLink to={PATH.JUNIOR_PRO_MAX}>
                            <SuperButton>
                                Junior + Pro Max
                            </SuperButton>
                        </NavLink>
                    </div>
                    <div className={style.HoverButton}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

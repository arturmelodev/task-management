import React from "react";
import style from './Watch.module.scss'

export default function Watch() {
    return (
        <React.Fragment>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>:</span>
            <span className={style.watchNumber}>0</span>
            <span className={style.watchNumber}>0</span>
        </React.Fragment>
    )
}
import { useState } from "react";
import style from '../styles/door.module.css'
import Gift from "./gift";

export default function Door(props){
    const door = props.value
    const css = door.select && !door.openDoor ? style.doorAtive : ''


    const alternarSelecao = e => props.onChange(door.toggleSelection())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor(){
        return(
                <div className={style.door}>
                    <h1 className={
                        door.select ? style.numberAtive : style.numberDefault
                    }>{door.id}</h1>
                    <div className={style.ball} onClick={abrir}></div>
                </div>
        )}

    return(
        //inicio da porta
        <div onClick={alternarSelecao}>
            <div className={`${style.shapeDoor} ${css}`} >
                {door.close? renderDoor(): door.Hasgift ? (<Gift/>):false}
            </div>
            <div className={style.floor}></div>
        </div>
         //final da porta
    )
}
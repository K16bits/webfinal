import style from '../styles/gift.module.css'

export default function Gift(){
    return(
        <div className={style.container}>
        <div className={style.containerGift}>
            <div className={style.coverBox}></div>
            <div className={style.box}></div>
            <div className={style.lineHorizontal}></div>
            <div className={style.lineVertical}></div>
        </div>
        </div>
    )
}
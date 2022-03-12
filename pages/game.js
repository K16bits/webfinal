import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState,useEffect } from "react";
import Door from "../components/door"
import styles from '../styles/door.module.css'
import { doorMake,updateDoors } from '../utils/doorMake';

export default function Game(){
    const router = useRouter()
    const {portas,local} = router.query;
    const [objDoors, setObjDoors] = useState([])

    useEffect(()=>{
        setObjDoors(doorMake(parseInt(portas),parseInt(local)-1));
    },[])

    // console.log(objDoor)
    return(
        <>
            {/* <h2>nPORTAS: {portas} Local:{local}</h2> */}
            <div className={styles.containerMain}>
            <div className={styles.containerDoor}>
                {
                    objDoors.map((obj)=>(
                        <Door key={obj.id} value={obj}
                        onChange={newDoor => setObjDoors(
                            updateDoors(objDoors,newDoor))}
                        />
                    ))
                }
            </div>
                <Link href={"/"} passHref>
                    <div className={styles.linkCenter}>
                        <h4 className={styles.linkReload}>Reiniciar Jogo</h4>
                    </div>
                </Link>
            </div>
        </>
    )
}
import React,{ useEffect, useState } from 'react'
import styles from './MainPage.module.css'
const MainPage = ({willBeBoughtItem}) => {
    const [dataLokal,setDataLokal] = useState(willBeBoughtItem)
    
    useEffect(() => {
        console.log("andri")
    }, [])

    useEffect(()=>{
        setDataLokal(willBeBoughtItem)
    },[willBeBoughtItem])

    const arr=[1,2,3,4]
    return (
        <div className={styles.container}>
            <h2>
                Main Page
            </h2>
            <ul>
                {willBeBoughtItem.map((data) => (
                    <li>
                        {data.id} dengan jumlah
                    </li>

                ))}
            </ul>
            halo
        </div>
    )
}
export default MainPage

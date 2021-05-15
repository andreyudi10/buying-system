import React,{ useEffect } from 'react'
import styles from './MainPage.module.css'
const MainPage = ({willBeBoughtItem}) => {
    useEffect(() => {
        console.log("andri")
    }, [])

    useEffect(()=>{
        console.log("andri2")
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

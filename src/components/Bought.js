import React,{ useEffect, useState} from 'react'
import styles from './Bought.module.css'

const Bought = () => {
    const [willBought, setWillBought] = useState()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("willBought"))
        console.log(data)
        setWillBought(data)
    },[])

    return (
        <div className={styles.container}>
            <h2>
                Main Page
            </h2>
            <ul>
                {willBought && willBought.map((data) => (
                    <li>
                        {data.id} dengan jumlah
                    </li>

                ))}
            </ul>
            halo
        </div>
    )
}

export default Bought

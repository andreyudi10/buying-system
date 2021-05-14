import React,{ useState } from 'react'
import styles from './SidePageList.module.css'
const SidePageList = ({nama,harga}) => {
    const [ itemValue, setItemValue] = useState(0)
    const handlePlusValueItem = () => {
        let newValue = itemValue
        newValue += 1
        setItemValue(newValue)
    }
    const handleMinusValueItem = () => {
        let newValue = itemValue        
        newValue === 0 ? newValue = 0 : newValue -= 1
        setItemValue(newValue)
    }

    return (
        <>
        <li className={styles.noDecoration}>
            makanan {nama}, harga {harga}
            <div>
                {itemValue}
            </div>
            <button onClick={handleMinusValueItem}> - </button>
            <button onClick={handlePlusValueItem}> + </button>
            <button>Buy</button>
        </li>
        </>
    )
}

export default SidePageList

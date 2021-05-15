import React,{ useState } from 'react'
import styles from './SidePageList.module.css'
const SidePageList = ({nama,harga,addFunction,id}) => {
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
        <li className={styles.container}>
            makanan {nama}, harga {harga}
            <div>
                {itemValue}
            </div>
            <button onClick={handleMinusValueItem}> - </button>
            <button onClick={handlePlusValueItem}> + </button>
            <button id={id} onClick={(e)=>addFunction(e.target.id,itemValue,nama,harga)}>Buy</button>
        </li>
        </>
    )
}

export default SidePageList

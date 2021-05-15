import React from 'react'
import styles from './SidePage.module.css'
import SidePageList from './SidePageList'

const SidePage = ({ data, addFunction}) => {

    return (
        <div className={styles.container}>
           <h2 className={styles.title}>
               Side Page Items               
           </h2> 
           <ul >
               {data.map((arr) =>      
                                <SidePageList 
                                    nama={arr.name}
                                    harga={arr.harga}
                                    id={arr.id}
                                    addFunction={addFunction}
                                />
            )}
           </ul>
        </div>
    )
}

export default SidePage

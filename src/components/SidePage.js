import React from 'react'
import styles from './SidePage.module.css'
import SidePageList from './SidePageList'

const SidePage = () => {
    const array = [
        {
            name:"berger",
            harga:2000
        },
        {
            name:"berger",
            harga:2000
        },
        {
            name:"berger",
            harga:2000
        },
        {
            name:"berger",
            harga:2000
        },
    ]

    // const mappedBody = (arr) => (
        
    // )
    return (
        <div className={styles.container}>
           <h2 className={styles.title}>
               Side Page Items               
           </h2> 
           <ul>
               {array.map((arr) =>      
                                <SidePageList 
                                    nama={arr.name}
                                    harga={arr.harga}
                                />
            )}
          
           </ul>
        </div>
    )
}

export default SidePage

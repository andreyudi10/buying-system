import React from 'react'
import styles from './DataPembeli.module.css'

const DataPembeli = () => {
    return (
        <div className={styles.container}>
            <h2>Data Pembeli</h2>
            <div className={styles.wrapper}>
                <label>Nama</label>
                <input id="nama"></input>            
            </div>
            <div className={styles.wrapper}>
                <label>Alamat</label>
                <input id="alamat"></input>                
            </div>
            <div className={styles.wrapper}>
                <label>nomor telepon</label>
                <input id="notelp"></input>            
            </div>
        </div>
    )
}

export default DataPembeli

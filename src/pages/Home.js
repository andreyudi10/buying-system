import React,{ useState } from 'react'
import SidePage from '../components/SidePage'
import MainPage from '../components/MainPage'
import DataPembeli from '../components/DataPembeli'
const Home = () => {
      const data = [
        {
            name:"Rocket Burger",
            harga:10000,
            id:101
        },
        {
            name:"Jus Jeruk",
            harga:5000,
            id:102
        },
        {
            name:"Nasi Goreng",
            harga:12000,
            id:103
        },
        {
            name:"Es Boba",
            harga:6000,
            id:104
        },
    ]

    const [ willBeBoughtItem, setWillBeBoughtItem] = useState([])
    const addFunction = (id,howMany,namaMakanan,harga) =>{        
        console.log(id,howMany,namaMakanan,harga)
        const addItem = () => {
            const newWillBeBoughtItem = willBeBoughtItem
            newWillBeBoughtItem.push({
                id:id,
                nama:namaMakanan,
                harga:harga,
                pcs:howMany
            })
            return newWillBeBoughtItem
        }

        const doNotAdd = () => {
            const newWillBeBoughtItem = willBeBoughtItem
            return newWillBeBoughtItem
        }

        const addingCondition = howMany > 0 ? addItem() : doNotAdd()
        setWillBeBoughtItem(addingCondition)
        console.log(willBeBoughtItem)
    }
    return (
        <div className="App">
            <SidePage data={data} addFunction={addFunction}/>
            <DataPembeli />
            <MainPage willBeBoughtItem={willBeBoughtItem}/>
        </div>
    )
}

export default Home

import React,{ useState, useEffect } from 'react'
import SidePage from '../components/SidePage'
import MainPage from '../components/MainPage'
import DataPembeli from '../components/DataPembeli'
import { useHistory} from 'react-router-dom'
const Home = () => {
    const history = useHistory()
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
    const [ angka,setAngka] = useState(0)
    useEffect(() => {
        const newWillBeBoughtItem = JSON.parse(localStorage.getItem('willBought'))
    }, [])
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
        console.log(willBeBoughtItem )
        localStorage.setItem("willBought",JSON.stringify(addingCondition))
        setAngka(angka+1)
        angka%2 !== 0 ? changePage() : changePage2()
    }

    const changePage = () =>{
        history.push('/bought')
    }
    const changePage2 = () =>{
        history.push('/')
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

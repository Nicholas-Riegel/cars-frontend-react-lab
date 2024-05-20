import {useState, useEffect} from 'react'
import * as carService from './services/carService'
import Home from './components/Home'
import Nav from './components/Nav'
import Create from './components/Create'

function App() {

  const [allCars, setAllCars] = useState([])
  const [page, setPage] = useState('home')

  useEffect(()=>{
    const getAllCars = async () => {
      const cars = await carService.index()
      setAllCars(cars)
    }
    getAllCars()
  }, [])

  const handlePageSelection = (page) => {
    setPage(page)
  }

  const handleCreate = async (car) => {
    await carService.create(car)
    setPage('home')
  }

  return (
    <div>
      <Nav {...{handlePageSelection}}/>
      <h1>Nicks Car's</h1>
      {page === 'home' && <Home {...{allCars}} />}
      {page === 'create' && <Create {...{handleCreate}}/>}
    </div>
  )
}

export default App
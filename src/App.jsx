import {useState, useEffect} from 'react'
import * as carService from './services/carService'
import Home from './components/Home'
import Nav from './components/Nav'
import Create from './components/Create'
import Show from './components/Show'

function App() {

  const [allCars, setAllCars] = useState([])
  const [page, setPage] = useState('home')
  const [selectedCar, setSelectedCar] = useState({})

  const getAllCars = async () => {
    const cars = await carService.index()
    setAllCars(cars)
  }
  
  useEffect(()=>{
    getAllCars()
  }, [])

  const handlePageSelection = (page) => {
    setPage(page)
  }

  const handleCreate = async (car) => {
    await carService.create(car)
    setPage('home')
  }

  const handleSelection = (selection) => {
    setSelectedCar(selection)
    setPage('show')  
  }

  const handleDelete = async (carId) => {
    await carService.deleteCar(carId)
    await getAllCars()
    setPage('home')
  }

  return (
    <div>
      <Nav {...{handlePageSelection}}/>
      <h1>Nicks Car's</h1>
      {page === 'home' && <Home {...{allCars, handleSelection}} />}
      {page === 'create' && <Create {...{handleCreate}}/>}
      {page === 'show' && <Show {...{selectedCar, handleDelete}}/>}
    </div>
  )
}

export default App
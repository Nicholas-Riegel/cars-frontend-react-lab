import {useState} from 'react'

function Update({handleUpdate, selectedCar}) {

    const [car, setCar] = useState(selectedCar)
    
    const handleChange = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdate(car)
        setCar({
            name: '',
            description: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Car Name:</label>
                <input 
                    type="text"
                    name='name'
                    id='name'
                    onChange={handleChange}
                    value={car.name} />
                <label htmlFor="description">Car Description:</label>
                <input 
                    type="text"
                    name='description'
                    id='description'
                    onChange={handleChange}
                    value={car.description} />
                <button type='submit'>Update</button>
            </form>
        </>
    )
}

export default Update
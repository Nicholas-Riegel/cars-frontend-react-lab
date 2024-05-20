import { useState } from 'react'

function Create({handleCreate}) {

    const [car, setCar] = useState({
        name: '',
        description: ''
    })

    const handleChange = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    }

    const handleSubmit = (carInputs) => {
        handleCreate(carInputs)
        setCar({
            name: '',
            description: ''
        })
    }

    return (
        <>
            <form onSubmit={()=>handleSubmit(car)}>
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
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Create
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/cars`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        return res.json()
    }catch(err){
        console.log(err);
    }
}

const create = async (car) => {
    try{
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(car)
        })
        res.json()
    }catch(err){
        console.log(err);
    }
}

const updateCar = async (car, carId) => {
	try {
		const res = await fetch(`${BASE_URL}/${carId}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(car),
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

const deleteCar = async (carId) => {
    try{
        await fetch(BASE_URL+ `/${carId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
    }catch(err){
        console.log(err);
    }
}

export {
    index,
    create,
    updateCar,
    deleteCar
}
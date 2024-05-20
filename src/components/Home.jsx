
function Home({allCars, handleSelection}) {
  return (
    <>
        <ul>
            {allCars.map((car, i)=>(
                <li key={i} onClick={()=>handleSelection(car)}>{car.name}</li>
            ))}
        </ul>
    </>
  )
}

export default Home

function Home({allCars}) {
  return (
    <>
        <ul>
            {allCars.map((car, i)=>(
                <li key={i}>{car.name}</li>
            ))}
        </ul>
    </>
  )
}

export default Home
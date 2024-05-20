
function Show({selectedCar, handleDelete}) {
  return (
    <>
        <h1>{selectedCar.name}</h1>
        <p>{selectedCar.description}</p>
        <button onClick={()=>handleDelete(selectedCar._id)}>Delete</button>
    </>
  )
}

export default Show
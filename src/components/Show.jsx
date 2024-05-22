
function Show({selectedCar, handleDelete, handlePageSelection}) {
  return (
    <>
        <h1>{selectedCar.name}</h1>
        <p>{selectedCar.description}</p>
        <button onClick={()=>handleDelete(selectedCar._id)}>Delete</button>
        <button onClick={()=>handlePageSelection('edit')}>Edit</button>
    </>
  )
}

export default Show
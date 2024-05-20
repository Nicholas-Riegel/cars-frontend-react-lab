
function Nav({handlePageSelection}) {
  return (
    <nav>
        <ul>
            <li onClick={()=>handlePageSelection('home')}>Home</li>
            <li onClick={()=>handlePageSelection('create')}>Create</li>
        </ul>
    </nav>
  )
}

export default Nav
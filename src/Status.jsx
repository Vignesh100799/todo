

const Status = ({item,statusChange}) => {

 
const handleChange = (e)=>{

 

  statusChange(e.target.value)
}

  return (

<select value={item.status} className={`${item.status === 'Completed' ? 'light-green-sts' : 'bg-danger' }`}   onChange={handleChange} aria-label="Default select example">
    <option  value="NotCompleted" >Not Completed</option>
    <option  value="Completed">Completed</option>
    </select>
  )
}
export default Status

import React, { useState, useEffect } from "react";
import TodoFilter from "./TodoFilter";
import Todolist from "./Todolist";

const Box = () => {
  const [todo, setTodo] = useState([]);
  const [newtitle, setNewTitle] = useState("");
  const [newdesc, setNewDesc] = useState("");
  const [edit,setEdit]=useState(null)
  const [newstatus,setNewStatus]=useState('NotCompleted')


  const statusChange = (value)=>{
    const updatedStatus = todo.map(todo=>(todo.title === newtitle ? {...todo,status:newstatus}: todo))
   
    setNewStatus(value)
    setTodo(updatedStatus)
   
  }
 

 
  const handleAdd = () => {
    if(edit){
       let update = todo.map((ele)=>
        {
          return ele.title === edit.title 
          ? {...ele,title:newtitle,description:newdesc,status:newstatus} 
          : ele
        }
      ) 
      setTodo(update)
      setEdit(edit)
      setNewStatus(newstatus)
      
      localStorage.setItem("list", JSON.stringify(update));

    }
    else{
    let newtodo = {
      title: newtitle,
      description: newdesc,
      status:newstatus,
    };
      let arr = [...todo,newtodo]
      setTodo(arr);
      localStorage.setItem("list", JSON.stringify(arr));
  }
    setNewDesc("");
    setNewTitle("");
    setNewStatus("")
};

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("list"));
    if (savedTodo) {
      setTodo(savedTodo);
    }
  }, []);

  useEffect(()=>{
    if(edit){
      setNewTitle(edit.title)
      setNewDesc(edit.description)
      setNewStatus(edit.status)
   
     
      
    }else{
      setNewDesc("");
      setNewTitle("");
      setNewStatus("")
      
     
      }
  },[edit])

  const handleEdit = (index)=>{
    let editTodo = todo[index]
    setEdit(editTodo)
   
  }

  const handleDelete = (index) => {
    let deleted = [...todo];
    deleted.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(deleted));
    setTodo(deleted);
  };
  return (
    <form className="my-5">
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Name"
            value={newtitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="form-control"
            
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={newdesc}
            onChange={(e) => setNewDesc(e.target.value)}
            
          />
        </div>
        <div className="col-xl-12 my-5">
          {newtitle.trim() === "" || newdesc.trim() === "" ? (
            <button
              disabled
              className="btn btn-danger"
              type="submit"
              onClick={handleAdd}
            >
              Add
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleAdd}
            >
              Add
            </button>
          )}
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-xl-6 sm-12">
            <h2>MY TODOS LIST</h2>
          </div>
          <div className="col-xl-6 sm-12 primary">
            Filter : <TodoFilter />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {todo.map((item, index) => {
              return (
                <Todolist  statusChange={statusChange} handleDelete={handleDelete} handleEdit={handleEdit} key={index} index={index} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Box;

import React from "react";
import Status from "./Status";

const Todolist = ({status,statusChange,item,index,handleDelete,handleEdit}) => {
  return (
    
        <div className="col-xl-4 md-6 sm-12">
          <div className="card p-3 m-2" style={{backgroundColor: '#ccf5d3', border: '0', textAlign: "left"}}>
          
            <div>Title :{item.title}</div>
            <div>Description :{item.description}</div>
            <div>
              Status :
                      <Status status={status} statusChange={statusChange} item={item} />
            <button className="btn btn-primary mx-4" onClick={(e)=>e.preventDefault(handleEdit(index))}>Edit</button>
            <button className="btn btn-danger" onClick={(e)=>e.preventDefault(handleDelete(index))}>Delete</button>
            </div>
            </div>

          </div>
    
     
  );
};

export default Todolist;

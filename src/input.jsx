import { useState } from "react";
import { useContext } from "react";
import Text from "./provider/api";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Add() {
  const [text, setText] = useState();
  const { add } = useContext(Text);
  const addtodo = () => {
    if (text) {
      add(text);
      setText("");
    }
  };

  return ( 
<>
    <h1 className="header" >To Do List</h1>
    <div>
    <div className="add-task input-group mb-3"> 
      <input
      className="input form-control"
      type="text"
      placeholder="add text"
      onChange={(e) => setText(e.target.value)}
      value={text}
      />
      <button onClick={addtodo} className="btn btn-success">add</button>
    </div>
    </div>
</>
  );
}

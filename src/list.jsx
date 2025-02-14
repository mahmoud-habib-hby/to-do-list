import { useContext, useEffect } from "react";

import Text from "./provider/api";
import 'bootstrap/dist/css/bootstrap.min.css'
function List() {
  const { val ,remove } = useContext(Text);
    const show = val.map((e) => {
      return <div key={e.id} className="one-task"> <p className="text">{e.text}</p>  <button   className="btn btn-warning" onClick={()=> remove(e.id)}>remove</button></div>;
    });
 

  return (
    <div className="tasks">{show}</div>
  );
}

export default List;

import tasks from "./tasks.json"
import { Component } from "react";

export class TaskList extends Component{
   state = {
    visible: false,
   }
   render(){
    return(
        <>
          <button onClick={() => {}}>показати</button>
        </>
    )
   }
}
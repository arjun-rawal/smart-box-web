import React, { useState } from "react";
import Draggable from 'react-draggable';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function ble() {

    navigator.bluetooth
      .requestDevice({
        filters: [{
          name: 'Smart Box'
        }],      
        optionalServices: ["9f5cd3d8-1735-4301-80af-b0c41c4aac5e"], 
      })
      .then((device) => {
        return device.gatt.connect();
      })
      .then((server) => {
        return server.getPrimaryService("9f5cd3d8-1735-4301-80af-b0c41c4aac5e");
      })
      .then((service) => {
        return service.getCharacteristic(
          "b0956118-a560-47d8-8a99-ea714782bd37"
        );
      })
      .then((characteristic) => {
        setBleColor("green");
        // characteristic.writeValue(Uint8Array.of(1));
      })
      .catch((error) => {

    });
  }
export default function newSession() {
  function ble() {

    navigator.bluetooth
      .requestDevice({
        filters: [{
          name: 'Smart Box'
        }],      
        optionalServices: ["9f5cd3d8-1735-4301-80af-b0c41c4aac5e"], // Required to access service later.
      })
      .then((device) => {
        return device.gatt.connect();
      })
      .then((server) => {
        return server.getPrimaryService("9f5cd3d8-1735-4301-80af-b0c41c4aac5e");
      })
      .then((service) => {
        return service.getCharacteristic(
          "b0956118-a560-47d8-8a99-ea714782bd37"
        );
      })
      .then((characteristic) => {
        setBleColor("lightgreen");
        // characteristic.writeValue(Uint8Array.of(1));
      })
      .catch((error) => {
        setBleColor('lightred');
    });
  }
    //card colors
    const [bleColor, setBleColor] = useState("white");
    const [taskColor, setTaskColor] = useState("white");
    const [classColor, setClassColor] = useState("white");
    const [minTimeColor, setMinTimeColor] = useState("white");
    const [subButColor,setSubButColor]=useState("white");


    const [tasks, setTasks] = useState([]);

    const [newTaskSubButColor,setNewTaskSubButColor]= useState("lightgrey");
    const [newTaskSubButText, setNewTaskSubButText] = useState("Submit")

    const listItems = tasks.map((task) =>      
    <Draggable><div style={{paddingLeft:"30px", paddingRight:'30px',paddingTop:'10px',paddingBottom:'10px',"text-align": "left","border": "1px solid lightblue","border-radius": "20px"}}>{renderTask(task)} </div></Draggable>
    );
    function renderTask(item){
      var split = item.split('😎');
        return(
          <div>

          <h4><b>{split[0]}</b></h4>
          <p>{split[1]}</p>

          </div>
     );
    }
    function addTask(){
      if (taskName.length==0){
        setNewTaskSubButColor("red");
        setNewTaskSubButText("Enter Task Name!")
      }
      else if (taskName.length>25){
        setNewTaskSubButColor("red");
        setNewTaskSubButText("Max 25 Name Characters!")
      } 
      else if (taskDetails.length>100){
        setNewTaskSubButColor("red");
        setNewTaskSubButText("Max 100 Details Characters!")
      }
    
      else{
        setTasks(tasks.concat(taskName+"😎"+taskDetails));
        setTaskName("");
        setTaskDetails("");
        setNewTaskSubButColor("grey")
        setTaskColor("lightgreen")
      }
    }
    
    const [taskName, setTaskName] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
      const handleTaskNameChange = event => {
        setTaskName(event.target.value);
        console.log("taskName:"+ event.target.value)
      };

      const handleTaskDetailsChange = event => {
        setTaskDetails(event.target.value);
        console.log("taskDetails:" + taskDetails);
      };

    

    return (
      
    <div>

      <div style={{position:'absolute'}}>
          {listItems}
      </div>

            <main className="container">
            <h1 style={{textAlign:'center'}}className="title">New Session</h1>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flexDirection:'column'}} className="grid">
                <a onClick={() => ble()}  style={{backgroundColor:bleColor}}className="card">
                    <div className="container1">
                        <h4><b>Connect to Smart Box</b></h4>
                        <p>Select Smart-Box in the Bluetooth pop-up</p>
                    </div>
                </a>
                <p style={{fontSize:30,paddingLeft:'23%'}}>&#8595;</p>

                <Popup trigger={<a className="card" style={{backgroundColor:taskColor}}> 
                                <div className="container1">
                                <h4><b>Add Tasks</b></h4>
                                <p>Add everything you want to complete in this session</p>
                                </div>
                                </a>} 
                        position="right center">
                          
                          <div> 
                            <label>Task Name</label>
                            <input type="text" name="taskName" id="taskName" onChange={handleTaskNameChange} value={taskName}></input>
                            <label>Task Details </label>
                            <input type="text" name="taskDetails" id="taskDetails" onChange={handleTaskDetailsChange} value={taskDetails}></input>
                            <button style={{backgroundColor:newTaskSubButColor}} onClick={addTask}>{newTaskSubButText}</button>
                          </div>
                          
                </Popup>

                <p style={{fontSize:30,paddingLeft:'23%'}}>&#8595;</p>
                <div className="card">
                    <div className="container1">
                        <h4><b>Import assignments from Google Classroom</b></h4>
                        <p>Smart Box only unlocks when assignments are turned in! (optional)</p>
                    </div>
                </div>
                <p style={{fontSize:30,paddingLeft:'23%'}}>&#8595;</p>
                <div className="card">
                    <div className="container1">
                        <h4><b>Set Minimum Session Time</b></h4>
                        <p>Box won't unlock until time is up (optional)</p>
                    </div>
                </div>
                <div style={{paddingLeft:'12.5%',paddingTop:'10%'}}>
                    <button style={{width:'25%',backgroundColor:subButColor}}>Next</button>
                </div>
            </div>

        </div>

        
            </main>
            <style jsx>{`

            .grid{
                padding-left:43%
            }

            .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width:50%;
            text-align:center;
            align-items:center;
            cursor:pointer;
            justify-content:center;
            height:50%;
            }

            .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }

            .taskCard {
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              transition: 0.3s;
              width:50%;
              text-align:center;
              align-items:center;
              cursor:pointer;
              justify-content:center;
              height:50%;
            }

            .container1 {
            padding: 2px 16px;
            }

            `}</style>
                </div>
    );
  }
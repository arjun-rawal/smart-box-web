import React, { useState } from "react";



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
    return (

    <div className="container">
            <main>
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
                <div className="card">
                    <div className="container1">
                        <h4><b>Add Tasks</b></h4>
                        <p>Add everything you want to complete in this session</p>
                    </div>
                </div>
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

            .container1 {
            padding: 2px 16px;
            }

            `}</style>
                </div>
    );
  }
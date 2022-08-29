import { useState } from "react";
import Player from "./Player";

function Data(){
    const [playerData,setPlayerData]=useState([])
    const [players,setPlayers]=useState({
        fname:"",
        sName:"",
        age:"",
        team:""
    })

    function handleSubmit(){
        setPlayers((prevObj) => {
            return [...prevObj, playerData];
          }
          );

        }
    function handleChange(event){
        const{name,value}=event.target
        setPlayerData((prevPlayer)=>{
            return {...prevPlayer,
                [name]: value}
        })
    }

    function deleteButton(id) {
        console.log(id);
        setPlayerData((preArr) => {
          return preArr.filter((item, index) => 
          index !== id);
        });
      }




    return (
    <Player  
    fName={"Koray"}
    sName={"Akpinar"}
    age={30}
    team={"Galatasaray"} 
        
    />
   
   
    )

}

export default Data;
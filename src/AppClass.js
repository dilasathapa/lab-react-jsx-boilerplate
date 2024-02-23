import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here

  render(){
    let images = this.imageData();
    return (
    <>
    <div className='image-container'>
        {
          images.map((ele, ind) => {
            return (
            <img src={ele.img} alt="elephant" key={ele.id}/>)
          })
        }
      </div>
    </>

    )
  }
}

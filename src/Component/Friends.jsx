import React from 'react';
import "./Friends.css";
export default function Friends() {
    let data = [
        {
            image:"./images/ravindra.jpg",
            id:1 ,
            name:"Ravindra Patel"   
         },
        {
            image:"./images/ravindra4.jpg",
            id:2,
            name:" Ankit Verma"
        },
        {
            image:"./images/ravindra2.jpg",
            id:3,
            name: "Yogesh Dubey"
        },
        {
            image:"./images/ravindra3.jpg",
            id:4,
            name:"Yash Jaiswal"
        },
        {
            image:"./images/ravindra5.jpg",
            id:5,
            name:"Sahil "
        },
        {
            image:"./images/ravindra6.jpg",
            id:6,
            name:"Anil Patel"
        }
    ];
    return (
        
        <div className="friends">
            <div className="heding">
            <p className="ph">Friends</p>
            <p className="ph2">See All Friends</p><br/>
            </div>
            <div>
            <p className="ph3">744 Friends</p>
            </div>
            <div className="col">
            {data.map((item, index) => {
                return ( 
                   
                    <div className = "pics" key = { index } >
                         
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                )

            })}
            </div>
            
        </div>
    )
}

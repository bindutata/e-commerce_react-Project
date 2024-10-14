import React from "react";
import {advantagesData} from './data';
import '../Advantages/styles.css'

const Advantages=()=>{
   return(
        <div className="container-fluid">
            <h2>OUR ADVANTAGES</h2>
            <div className="services">
                {advantagesData.map((item,index)=>(
                    <div className="advantages" key={index}>
                        <div className="icon">
                            {item.icon}
                        </div>
                        <div className="desc">
                            <p className="title">{item.title}</p>
                            <p className="info">{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            

        </div>
   )
};
export default Advantages;


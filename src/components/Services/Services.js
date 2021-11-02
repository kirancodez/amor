import React, { useState } from "react" 
import Base from "../Base/Base";
import ServiceList from "../Home/serviceList";
import "./style/services.css";

const Services = () => {
    const [counting, setCounting] = useState(150)
    
    var timesRun = counting;
    var interval = setInterval(function(){
        if(timesRun === 154){
            clearInterval(interval);
        }
        else {
            setCounting(timesRun += 1) 
        }
    }, 1600);

    return(
        <Base>
            <div className="serviceList">
                <ServiceList 
                    heading= {<> Quality And Trust Is <br/>All We <span>Concern</span> About</>}
                    content = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
                />
                <h2 className="text-center text-capitalize">
                    We have <span>{counting}+</span> happy Customers, <span> Still Counts. </span>
                </h2>
            </div>
        </Base>
    )
}

export default Services;
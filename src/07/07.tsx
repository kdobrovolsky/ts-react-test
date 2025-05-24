import { useState } from "react";
import { ManType } from "./07.test";

type PropsType = {
  title: string;
  man: ManType;
  food: Array<string>
  car: {model: string}
};

export const ManComponent = ({ title, man, ...props}:PropsType) => {
 
 const [messages,setMessage] = useState<string>("hello")

  return (
   <div>
    <h1>{title}</h1>
    <hr />
    <div>
      {props.car.model}
      {props.food}
    </div>
   </div> 
  );

};  


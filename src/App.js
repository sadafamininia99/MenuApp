import { useState } from "react";

const message=[
    "learn react",
    "apply for jobs",
    "invest money "
];
 



export default function App(e){
 
    const [step,setStep]=useState(2);
  

    function handelPrevious (){
        else
      if(step >1 )setStep (step-1);
    }

    function handelNext (){
    if(step<3) setStep (step+1);
    }

    return <div className="steps"> 
        <div className="numbers">
            <div className={`${step >=1 ? "active" : ""}`}>1</div>
            <div className={`${step >=2 ? "active" : ""}`}>2</div>
            <div className={`${step >=3  ? "active" : ""}`}>3</div>
        </div> 
        <p className="message">step{step}:{message[step-1]}</p>
        <div className="buttons">

        <button bgColor="#7950f2" textColor="#fff" onClick={handelPrevious}>
<span>👈</span> Previous
</button>

<button bgColor="#7950f2" textColor="#fff" onClick={handelNext}>
Next <span>👉</span>
<span>🤓</span>
</button>
</div>
    </div>
}




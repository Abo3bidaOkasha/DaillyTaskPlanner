import React, { useRef, useState } from 'react';
import './Assets/css/style.css'
const FristComp = () => {
    
    const [inputValue, setInputValue] = useState([]);
    const inputref = useRef(null);
    
    return (
        <div className="container">
          <div className="note">Give Me Your Tasks</div>
           <input ref={inputref} type="text" name="txt" id="ttt" />
           <button id='qwe' onClick={() => {
             if (inputref.current.value.trim() !== '') {
               setInputValue([...inputValue, inputref.current.value]);
               inputref.current.value = '';
              }
           }}>let's make it done</button>
           {inputValue.map((item, index) => (
             <div key={index} className="item">
               
               <div className="num">
                Task 
                {inputValue.indexOf(item) + 1}
               </div>
               <div className="content">
                {item}
                </div>
               
               
               <div className="check">
                 <div className="state">
                   <input type="radio" name={`state-${index}`} />
                   <p>Ended</p>
                 </div>
                 <div className="state">
                   <input type="radio" name={`state-${index}`} />
                   <p>Still onGoing</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
        // <div className="cont">
        //   <div className="box">
        //     <div className="smallBox">
              
        //     </div>
        //   </div>
        // </div>
    );
};

export default FristComp;
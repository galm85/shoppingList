import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
    question:string;
    action:any;
    content?:string;
    params:any[];
    isOpen:boolean;
    setIsOpen:any;
}

const Dialog: React.FC<Props> = ({isOpen,setIsOpen,question,content,action,params}) => {
  
    const dispatch:any = useDispatch();
  
    const fn = (e:any)=>{
        e.stopPropagation();
        dispatch(action(...params));
        setIsOpen(false);
  }
  
 
  

  return (
    <>
    {isOpen && 
        <div className="dialog">
                <div className="dialog__container">
                    <h3 className='dialog__question'>{question}</h3>
                    <p>{content}</p>
                    <div className="dialog__options">
                        <button className='btn save-btn' style={{border:"1px solid white"}} onClick={(e)=>fn(e)}>אישור</button>
                        <button className='btn '  onClick={()=>setIsOpen(false)}>ביטול</button>
                    </div>
                </div>
        </div>
    }
    </>
  )
}

export default Dialog
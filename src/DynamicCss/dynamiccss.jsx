
import { useState } from 'react';
import './dynamic.css'
const DynamicStyle = () => {
  // dynamically change the box color and its size
  const initialStyle = {
    color: '',
    height: '',
    width: ''
  }
  const [style , setStyle]= useState(initialStyle);

  const inputChangeColor = (e)=> {
  
    
    
    setStyle({...style , color: e.target.value})

    console.log(style)
  }
  const inputChangeHeight = (e)=> {

    // logic for setting the height
    console.log(e.target.value)
    setStyle({...style , height: e.target.value})
    console.log(style)
  }

  const inputChangeWidth = (e)=> {
    // logic for setting the width
    console.log(e.target.value)
    setStyle({...style , width: e.target.value})
    console.log(style)
  }
  return (
    <div className="flex flex-column conatiner">
      <div  >
        <span>Color:</span>
        <input  id ='color' className='input' onChange={inputChangeColor}/>
      </div>
      <div  className='margin-auto ' >
        <span>Height</span>
      <input  id= 'height' className='input' onChange={inputChangeHeight} />
      </div>
      <div  className='margin-auto '>
        <span>Width</span>
      <input className='input'  id = 'width' onChange={inputChangeWidth}/>
      </div>
      <div className="box" style={{backgroundColor: style.color}}>

      </div>

    </div>
  );
};


export default DynamicStyle;
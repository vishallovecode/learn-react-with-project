
import { useState } from 'react';
import './dynamic.css'
const DynamicStyle = () => {

  const initialStyle = {
    color: 'red',
    height: '',
    width: ''
  }
  const [style , setStyle]= useState(initialStyle);

  const inputChangeColor = (e)=> {
    setStyle({...style , color: e.target.value})
    console.log(style)
  }
  const inputChangeHeight = (e)=> {
    console.log(e.target.value)
    //
    setStyle({...style , height: e.target.value}) ;
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
        <input  id ='color' className='input' onChange={inputChangeColor} value= {style.color}/>
      </div>
      <div  className='margin-auto ' >
        <span>Height</span>
      <input  id= 'height' className='input' onChange={inputChangeHeight} />
      </div>
      <div  className='margin-auto '>
        <span>Width</span>
      <input className='input'  id = 'width' onChange={inputChangeWidth}/>
      </div>
      <div  className='margin-auto '>
        <span>Border</span>
      <input className='input'  id = 'border' onChange={inputChangeWidth}/>
      </div>
      <div className= {`box ${style.color}`} style={{ height: style.height , width:style.width}}>

      </div>

    </div>
  );
};
export default DynamicStyle;

// dynamic style
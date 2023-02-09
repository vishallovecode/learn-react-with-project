
import './dynamic.css'
const DynamicStyle = () => {
  // dynamically change the box color and its size
  return (
    <div className="flex flex-column conatiner">
      <div >
        <span>Color:</span>
        <input />
      </div>
      <div>
        <span>Width</span>
      <input />
      </div>
      <div>
        <span>Height</span>
      <input />
      </div>
      <div className="box">

      </div>
    
    </div>
  );
};


export default DynamicStyle;
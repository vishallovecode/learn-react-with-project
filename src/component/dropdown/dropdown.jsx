import './dropdown.css'
const DropDown = (props) => {
    // const data = [{id:1 , label: "Red"}, {id:2 , label: "Blue"}, {id:3 , label: "Green"}];
    const {title = "City" , data , dropdownHandler} = props;
  return (
    <div className="drop-con flex">
        <div className='title'>{title} :</div>
      <select className="select-cont" onChange={dropdownHandler} placeholder ='select '>
      {
        data?.map((item)=>{
            return (
                <option value={item.id}>{item.label}</option>
            )
        })
      }
      </select>
    </div>
  );
};

export default DropDown;

// this is the child component 
// this accept the array of object where object must contain the id and label key



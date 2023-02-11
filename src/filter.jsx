import { useEffect, useState } from "react";
import { dropdownList } from "./component/dropdown/constant";
import DropDown from "./component/dropdown/dropdown"

const Filter = ()=> {
const [stateList , setStateList] = useState([]);
const [selectedState , setSelectedState] = useState([]);
const [cityList , setCityList] = useState([]);

useEffect(()=>{
    const updatedDropDown  = dropdownList.map((data , index)=>{
        return {
            ...data, 
            label: data.name,
            id :index
        }
    })
    const updatedCityList =  dropdownList[0]?.city.map((city , index)=>{
        return {
            ...city , 
            id:index, label: city.name
        }
    })
    setCityList(updatedCityList)
    setStateList(updatedDropDown)
}, [])

const stateHandler = (e)=> {
    console.log(stateList[e.target.value])
    const updatedCityList =  stateList[e?.target?.value]?.city.map((city , index)=>{
        return {
            ...city , 
            id:index, label: city.name
        }
    })
    setCityList(updatedCityList)
    setSelectedState(stateList[e.target.value])
}




    return (
        <div className="flex flex-column">
            <DropDown data= {stateList} title = {"State"} dropdownHandler = {stateHandler}/>
            <DropDown title= {"City"}  data= {cityList}/>
            <DropDown  title = {"Towns"}/>
        </div>
    )
}


export default Filter;
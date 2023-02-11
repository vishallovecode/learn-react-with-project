import { useEffect, useState } from "react";
import { dropdownList } from "./component/dropdown/constant";
import DropDown from "./component/dropdown/dropdown"

const Filter = ()=> {
const [stateList , setStateList] = useState([]);
const [selectedState , setSelectedState] = useState([]);
const [cityList , setCityList] = useState([]);
const [landmark , setLandmarks] = useState([]);

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
    setSelectedState(dropdownList[0]) 
    setStateList(updatedDropDown)
}, [])

const stateHandler = (e)=> {
   const index = e.target.value;
    // e.target.value  => will be id which we have set using index 
    const updatedCityList =  stateList[index]?.city.map((city , index)=>{
        return {
            ...city , 
            id:index, label: city.name
        }
    })
    setCityList(updatedCityList)
    setSelectedState(stateList[e.target.value]) 
}

const cityHandler = (e)=>{
    const cityIndex =  e.target.value;
    console.log(selectedState.city)
    console.log( selectedState?.city[cityIndex]);
    const updatedTowns =  selectedState?.city[cityIndex]?.landmarks?.map((landmark, index)=>{
        return {
            ...landmark,
            id: index, 
            label: landmark.name
        }
    })
    setLandmarks(updatedTowns)

}



    return (
        <div className="flex flex-column">
            <DropDown data= {stateList} title = {"State"} dropdownHandler = {stateHandler}/>
            <DropDown title= {"City"}  data= {cityList} dropdownHandler= {cityHandler}/>
            <DropDown  title = {"Towns"}  data = {landmark}/>
        </div>
    )
}


export default Filter;


// 
import { useEffect, useState } from "react";
import { dropdownList } from "./component/dropdown/constant";
import DropDown from "./component/dropdown/dropdown"
import InfoCard from "./infoCard";

const Filter = ()=> {
const [stateList , setStateList] = useState([]);
const [selectedState , setSelectedState] = useState([]);
const [cityList , setCityList] = useState([]);
const [selectedCity , setSelectedCity] = useState({})
const [landmark , setLandmarks] = useState([]);
const [selectedLandMarks , setSelectedLandMarks] = useState('')

useEffect(()=>{
    const updatedDropDown  = dropdownList.map((data , index)=>{
        return {
            ...data,
            label: data.name,
            id: index
        }
    })

    // data  and index =>   
    const updatedCityList =  dropdownList[0]?.city.map((city , index)=>{
        return {
            ...city , 
            id:index, 
            label: city.name
        }
    })
    const updatedLandmarks = updatedCityList[0].landmarks.map((land, index)=> {
        return {
            ...land , 
            label:  land.name, id: index
        }
    })

    setLandmarks(updatedLandmarks)
    setCityList(updatedCityList)
    setSelectedCity(updatedCityList[0]) 
    setSelectedState(dropdownList[0]) 
    // setting of selected landmarks select by default select the first element from the array
    setSelectedLandMarks(updatedLandmarks[0])
    setStateList(updatedDropDown);
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
    setSelectedCity(updatedCityList[0])
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
    setSelectedCity(selectedState.city[cityIndex])

}



    return (
        <div className="flex flex-column">
            <div className="flex">
            <DropDown data= {stateList} title = {"State"} dropdownHandler = {stateHandler}/>
            <InfoCard name = {selectedState.name}  description  = {selectedState.description}/>
            </div>
            <div className="flex">
            <DropDown title= {"City"}  data= {cityList} dropdownHandler= {cityHandler}/>
            <InfoCard name = {selectedCity.name}  description  = {selectedCity.description}/>
            </div>
            <div className="flex">

            <DropDown  title = {"Towns"}  data = {landmark}/>
            <InfoCard name = {selectedLandMarks.name}  description  = {selectedLandMarks.description}/>
            </div>
        
        
        </div>
    )
}


export default Filter;


// 




 

// dropdonw picking the first array object

// state = [~x {name: "visha", city: [{}] , description},{name: "visha", city: [{}] , description}]


// {name: "Vishal", city: [{name: "xyz" , landmarks: [{}]} , {name: "xyz" , landmarks: [{}]} ,{name: "xyz" , landmarks: [{}]}]
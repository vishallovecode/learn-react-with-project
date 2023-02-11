import './info.css'
const InfoCard = (props)=> {
    const  {name , description} = props;
     return  (
        <div className="flex flex-column justify-content-start info">
                 <div>{name}
                
                </div>
            <div>
                {description}
            </div>
       
        </div>
     )
}


export default InfoCard;
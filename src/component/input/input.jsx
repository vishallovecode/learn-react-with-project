
import './input.css'
const LInput = (props)=> {
    const {onchange} = props
    return (
        <div className="search-cont">
            <input onChange={onchange} placeholder= {props.title} className = "search-input"/>
        </div>
    )
}

LInput.defaultProps = {
    title: "Search"
}
export default LInput;
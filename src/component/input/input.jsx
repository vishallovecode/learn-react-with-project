
import './input.css'
const LInput = (props)=> {
    return (
        <div className="search-cont">
            <input placeholder= {props.title} className = "search-input"/>
        </div>
    )
}

LInput.defaultProps = {
    title: "Search"
}
export default LInput;
import './modal.css'
import ReactDOM from 'react-dom'
const Modal  = (props)=> {
    return  ReactDOM.createPortal(<div className='modal'>
       this is my modal
   </div> , document.body)
    
}


export default Modal;











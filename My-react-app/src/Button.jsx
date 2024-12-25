import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Button(){
    const handleClick=(e)=>{
        console.log(e.target.textContent = 'OUCH!')
    }
    return(
        <button onClick={(e)=>handleClick(e)} className="btn btn-outline-primary my-custom-btn">Click me </button>
    )
}
export default Button
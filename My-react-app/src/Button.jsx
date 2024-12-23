import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Button(props){
    return(
        <button className="btn btn-outline-primary my-custom-btn">{props.nam}</button>
    )
}
export default Button
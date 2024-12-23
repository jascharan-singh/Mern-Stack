import profilePic from './assets/profilePic.jpg'
import propTypes from 'prop-types'
function Card(props){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>{props.name}</h2>
            <p>Im studying {props.isStudyingReact ? "React" : "Not React"}</p>
        </div>
    );
}

Card.propTypes = {
    name: propTypes.string.isRequired, // Make name required
    isStudyingReact: propTypes.bool,  // Optional boolean
};
Card.defaultProps = {
    isStudyingReact: false,
    name: "Unknown"
}
export default Card
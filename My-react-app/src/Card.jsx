import profilePic from './assets/profilePic.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Jascharan Singh</h2>
            <p>Im studying React</p>
        </div>
    )
}
export default Card
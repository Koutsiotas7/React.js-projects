import profilePic from './assets/dice.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt ="profile picture"></img>
            <h2 className="card-title">Koutsi</h2>
            <p className="card-text">Software development plus Web development.</p>
        </div>
    );
}

export default Card
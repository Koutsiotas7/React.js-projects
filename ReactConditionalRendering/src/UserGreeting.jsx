import PropTypes from "prop-types";

function UserGreeting(props) {
    return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username || "Guest"}</h2> : 
                              <h2 className="login-prompt">Log in first.</h2>);

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};

export default UserGreeting
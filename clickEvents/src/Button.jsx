

function Button() {
    /*
    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s.`);
        } else {
            console.log(`${name} this is getting out of hand.`);
        }
    };
    */

    const handleClick = (e) => e.target.textContent = "Wow"; //e is event

    return(
        <button onClick={(e) => handleClick(e)}>Click me!</button>
    );
}

export default Button;
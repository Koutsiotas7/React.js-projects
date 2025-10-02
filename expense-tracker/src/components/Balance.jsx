
function Balance({ transactions })
{ 
    const total = transactions.reduce((acc, t) => acc + t.amount, 0); 
        return ( 
        <div className="balance"> 
            <h2>My Total Balance </h2> 
            <p className="balance-amount">{total} €</p> 
        </div> 
        ); 
}

export default Balance;
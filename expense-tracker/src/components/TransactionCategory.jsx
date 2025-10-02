
function TransactionCategory({ transactions }) 
{ 
    const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0); 
    
    const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0); 
    
    return( 
        <div className="category"> 
            <div > 
                <h3>INCOME</h3> 
                <p className="income">{income} €</p> 
            </div> 

            <div> 
                <h3>EXPENSE</h3> 
                <p className="expense">{Math.abs(expense)} €</p> 
            </div> 
        </div> 
        ); 
}

export default TransactionCategory;
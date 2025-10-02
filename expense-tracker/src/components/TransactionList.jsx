
function TransactionList({ transactions }) 
{ 
    return ( 
        <div className="transaction-list"> 
            <h3>Transactions</h3> 
                <ul> 
                    {transactions.map((t, index) => ( 
                        <li key={index} 
                        className={t.amount > 0 ? "income" : "expense"} 
                        > 
                        <span>{t.text}</span> 
                        <span>{t.amount > 0 ? + `+${t.amount}` : t.amount} €</span> 
                        </li> 
                        ))
                    } 
                </ul> 
        </div> 
    ); 
}

export default TransactionList;

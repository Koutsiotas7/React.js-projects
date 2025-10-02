import { useState } from "react";

function AddTransaction({ onAdd }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !amount) return;

        onAdd({ text, amount: +amount });
        setText("");
        setAmount(0);
    };

    return (
        <form 
            className="add-transaction border rounded p-3 my-4 mx-auto bg-white" 
            style={{ maxWidth: "500px" }} 
            onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the title of the transaction..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-success w-100 fw-bold">
                Add Transaction
            </button>
        </form>
    );
}

export default AddTransaction;

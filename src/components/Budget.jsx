import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const {dispatch} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [editBudget, setEditBudget] = useState(false);

    const [budgetPrice, setBudgetPrice] = useState(budget);

    const handleEditBudget = () => {
        setEditBudget(!editBudget);
    }

    const handleAddBudget = () => {
        dispatch({
            type: 'ADD_BUDGET',
            payload: budgetPrice,
        });
        setEditBudget(!editBudget);
    }

    return (
        <div className="alert alert-secondary">
            {!editBudget ?
                <span>Budget : ${budgetPrice}</span>
                :
                <input type="text" className="form-control" value={budgetPrice} onChange={(e) => setBudgetPrice(e.target.value)} />
            }
            {!editBudget ?
                <button onClick={handleEditBudget} className="btn btn-primary mx-3">
                    edit
                </button>
                :
                <button onClick={handleAddBudget} className="btn btn-primary mt-3">
                    done
                </button>
            }
        </div>
    )
}

export default Budget;
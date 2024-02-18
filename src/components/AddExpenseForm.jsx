import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        // alert('name' + name + 'cost' + cost);
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

        setName('');
        setCost('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" id="name" />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" required className="form-control" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
                </div>
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-4">Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;
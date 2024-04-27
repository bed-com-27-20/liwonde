'use client';

import React, { useState } from "react";
import axios from "axios";
import './style.css';
import Image from "next/image";
import icon from '../../images/icon.png';
interface OPDItem {
    ID: number;
    firstName: string;
    LastName: string;
    Treatment: string;
    Amount: string;
    MedicalScheme: string;
    Date: string;
}
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
export default function OPD() {
    const [opd, setopd] = useState<OPDItem[]>([
        { ID: 1, firstName: '', LastName: '', Treatment: '', Amount: '', MedicalScheme: '', Date: '' }
    ]);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const addRow = () => {
        const newRow: OPDItem = {
            ID: opd.length + 1,
            firstName: '',
            LastName: '',
            Treatment: '',
            Amount: '',
            MedicalScheme: '',
            Date: ''
        };
        setopd(prevData => [...prevData, newRow]);
    }

    const deleteRow = (index: number) => {
        setopd(prevData => {
            const newData = prevData.filter((row, i) => i !== index);
            calculateTotal(newData); // Recalculate total after row deletion
            return newData;
        });
    }

    const updateRow = (index: number, newData: Partial<OPDItem>) => {
        const updatedData = [...opd];
        updatedData[index] = { ...updatedData[index], ...newData };
        setopd(updatedData);

        // Calculate total amount whenever amount is updated
        calculateTotal(updatedData);
    }

    const calculateTotal = (data: OPDItem[]) => {
        const total = data.reduce((acc, curr) => acc + parseFloat(curr.Amount || '0'), 0);
        setTotalAmount(total);
    }

    const saveData = async () => {
        try {
            const response = await axios.post('', opd);
            console.log("button clicked")
            console.log('Response:', response.data);
            alert("data saved successfully")
            // Handle success response here
        } catch (error) {
            console.error('Error:', error);
            alert("failed to save data")
            // Handle error here
        }
    }

    return (
        <div>
            <div id="table">
                <Image
                    src={icon}
                    alt=""
                    width={100}
                    height={100}
                />
                <div>
                    <h1 id="pharma-head">Radiology</h1>
                    <h1>{formattedDate}</h1>
                    <br></br>
                    <br></br>
                    search bar here
                    <br></br>
                    <br></br>
                </div>
                <div className="table-box">
                    <div className="table-row">
                        <div className="table-cell">
                            <p>ID</p>
                        </div>
                        <div className="table-cell">
                            <p>FirstName</p>
                        </div>
                        <div className="table-cell">
                            <p>LastName</p>
                        </div>
                        <div className="table-cell">
                            <p>Treatment</p>
                        </div>
                        <div className="table-cell">
                            <p>Amount</p>
                        </div>
                        <div className="table-cell">
                            <p>MedicalScheme</p>
                        </div>
                        <div className="table-cell">
                            <p>Date</p>
                        </div>
                        <div className="table-cell">
                            <p>Action</p>
                        </div>
                    </div>
                </div>

                {opd.map((row, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="e.g 1"
                                value={row.ID}
                                // onChange={(event) => updateRow(index, { ID: parseInt(event.target.value) })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder=" e.g damascus"
                                value={row.firstName}
                                onChange={(event) => updateRow(index, { firstName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="multiplug"
                                value={row.LastName}
                                onChange={(event) => updateRow(index, { LastName: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="text"
                                id="label"
                                placeholder="treatment"
                                value={row.Treatment}
                                onChange={(event) => updateRow(index, { Treatment: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <input
                                type="number"
                                id="label"
                                placeholder="Amount"
                                value={row.Amount}
                                onChange={(event) => updateRow(index, { Amount: event.target.value })}
                            />
                        </div>
                        <div className="table-cell">
                            <select name="" id="type" required>
                                <option value=""></option>
                                <option value="MASM">MASM</option>
                                <option value="Liberty Health">Liberty Health</option>
                                <option value="Nation Bank">Nation Bank</option>
                                <option value="Reserve Bank">Reserve Bank</option>
                                <option value="Liberty Health">WaterBoard</option>
                                <option value="Nation Bank">Escom</option>
                                <option value="Reserve Bank">Med Health</option>
                            </select>
                        </div>
                        <div className="table-cell">
                            <input
                                type="date"
                                id="label"
                            />
                        </div>
                        <div className="table-cell">
                            <button className="delete" onClick={() => deleteRow(index)}>Delete</button>
                        </div>
                    </div>
                ))}

                {/* Total row */}
                <div className="table-row total-row">
                    <div className="table-cell">
                        Total:
                    </div>
                    <div className="table-cell">
                        {totalAmount}
                    </div>
                    <div className="table-cell">
                        
                    </div>
                </div>

                <button onClick={addRow} className="button">Add Row</button>
                <button onClick={saveData} className="button1">Save</button>
            </div>
        </div>
    );
}
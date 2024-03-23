import { useState } from "react"

export default function InputBoard() {

    const [inputValues, setInputValues] = useState(
        {
            initialInvestment: 10000,
            annualInvestment: 1000,
            expectedReturn: 2000,
            duration: 10
        }
    )

    function inputValuesHandler(inputType, input) {
        setInputValues((initialInput) => {
            return {
                ...initialInput, [inputType]: input
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p >
                    <label>Initial Investment</label>
                    <input type="number" required placeholder={inputValues.initialInvestment} onChange={(input) => inputValuesHandler('initialInvestment', input.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Duration</label>
                    <input type="number" required />
                </p>
            </div>
        </section>
    )
}
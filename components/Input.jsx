// Exercise 4 - Input Component

import useInput from '../src/hooks/useInput.js'

export default function Input() {
    const { value, onChange, setValue, reset } = useInput("")

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 04
            </span>

            <h2>useInput</h2>

            <p>Manage input state</p>

            <input
                className="custom-input"
                type="text"
                placeholder="Enter your name..."
                value={value}
                onChange={onChange}
            />

            <div className="input-preview">
                {value || "Your text will appear here"}
            </div>

            <p>Characters: {value.length}</p>

            <div className="buttons">
                <button onClick={() => setValue("Hello React!")}>
                    Set Value
                </button>

                <button onClick={reset}>
                    Reset
                </button>
            </div>

        </div>
    )
}
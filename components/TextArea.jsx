// Exercise 5 - Textarea Component

import useTextarea from '../src/hooks/useTextarea.js'

export default function Textarea() {
    const { value, onChange, setValue, reset } = useTextarea("")

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 05
            </span>

            <h2>useTextarea</h2>

            <p>Manage multiline text state</p>

            <textarea
                className="custom-textarea"
                placeholder="Write something..."
                rows={5}
                value={value}
                onChange={onChange}
            />

            <div className="input-preview">
                {value || "Your text will appear here"}
            </div>

            <p>Characters: {value.length}</p>

            <div className="buttons">
                <button onClick={() => setValue("Learning React Custom Hooks!")}>
                    Set Value
                </button>

                <button onClick={reset}>
                    Reset
                </button>
            </div>

        </div>
    )
}
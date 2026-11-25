// Exercise 1 - Toggle Component

import useToggle from '../src/hooks/useToggle.js'

export default function Toggle() {
    const { value, toggle, setTrue, setFalse } = useToggle()

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 01
            </span>

            <h2>useToggle</h2>

            <p>Manage a boolean state</p>

            <div className={`value-display ${value ? "on" : "off"}`}>
                {String(value)}
            </div>

            <div
                className={`toggle-switch ${value ? "active" : ""}`}
                onClick={toggle}
            >
                <div className="toggle-circle"></div>
            </div>

            <div className="buttons">
                <button onClick={toggle}>
                    Toggle
                </button>

                <button onClick={setTrue}>
                    Set True
                </button>

                <button onClick={setFalse}>
                    Set False
                </button>
            </div>

        </div>
    )
}
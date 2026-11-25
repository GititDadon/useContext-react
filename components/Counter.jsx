// Exercise 2 - Counter Component

import useCounter from '../src/hooks/useCounter.js'

export default function Counter() {
    const { value, inc, dec, reset } = useCounter(0)

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 02
            </span>

            <h2>useCounter</h2>

            <p>Manage numeric state</p>

            <div className="value-display">
                {value}
            </div>

            <div className="buttons">
                <button onClick={dec}>
                    - Decrease
                </button>

                <button onClick={inc}>
                    + Increase
                </button>

                <button onClick={reset}>
                    Reset
                </button>
            </div>

            <p>Initial value: 0</p>

        </div>
    )
}
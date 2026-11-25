// Exercise 6 - Previous Component

import usePrevious from '../src/hooks/usePrevious.js'
import useCounter from '../src/hooks/useCounter.js'

export default function Previous() {
    const { value, inc, dec, reset } = useCounter(0)

    const previousValue = usePrevious(value)

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 06
            </span>

            <h2>usePrevious</h2>

            <p>Track the previous value</p>

            <div className="previous-grid">

                <div className="previous-box">
                    <span>Previous Value</span>
                    <h3>{previousValue ?? "—"}</h3>
                </div>

                <div className="current-box">
                    <span>Current Value</span>
                    <h3>{value}</h3>
                </div>

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

        </div>
    )
}
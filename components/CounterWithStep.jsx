// Exercise 3 - CounterWithStep Component

import useCounterWithStep from '../src/hooks/useCounterWithStep.js'

export default function CounterWithStep() {
    const initial = 0
    const step = 2

    const { value, inc, dec, reset } =
        useCounterWithStep(initial, step)

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 03
            </span>

            <h2>useCounterWithStep</h2>

            <p>Manage a counter with custom steps</p>

            <div className="value-display">
                {value}
            </div>

            <div className="buttons">
                <button onClick={dec}>
                    -{step}
                </button>

                <button onClick={inc}>
                    +{step}
                </button>

                <button onClick={reset}>
                    Reset
                </button>
            </div>

            <p>Initial value: {initial}</p>
            <p>Step size: {step}</p>

        </div>
    )
}
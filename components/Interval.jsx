// Exercise 7 - Interval Component

import useInterval from '../src/hooks/useInterval.js'
import useCounter from '../src/hooks/useCounter.js'

export default function Interval() {
    const { value, inc, reset } = useCounter(0)

    const { start, stop, isRunning } = useInterval(
        inc,
        1000,
        false
    )

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 07
            </span>

            <h2>useInterval</h2>

            <p>Run a callback every second</p>

            <div className="value-display">
                {value}
                <span className="timer-unit">sec</span>
            </div>

            <div className={`timer-status ${isRunning ? "running" : "stopped"}`}>
                <span className="status-dot"></span>
                {isRunning ? "Running" : "Stopped"}
            </div>

            <div className="buttons">

                <button
                    onClick={start}
                    disabled={isRunning}
                >
                    Start
                </button>

                <button
                    onClick={stop}
                    disabled={!isRunning}
                >
                    Stop
                </button>

                <button onClick={reset}>
                    Reset
                </button>

            </div>

            <p>Interval: 1000ms</p>

        </div>
    )
}
// Exercise 8 - Timeout Component

import { useState } from 'react'
import useTimeout from '../src/hooks/useTimeout.js'

export default function Timeout() {
    const [message, setMessage] = useState("Ready")

    const { start, cancel, isScheduled } = useTimeout(
        () => setMessage("Time is up!"),
        3000,
        false
    )

    function handleStart() {
        setMessage("Waiting...")
        start()
    }

    function handleCancel() {
        cancel()
        setMessage("Cancelled")
    }

    function handleReset() {
        cancel()
        setMessage("Ready")
    }

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 08
            </span>

            <h2>useTimeout</h2>

            <p>Run a callback after a delay</p>

            <div className={`timeout-message ${
                message === "Time is up!" ? "completed" : ""
            }`}>
                {message}
            </div>

            <div className={`timer-status ${
                isScheduled ? "running" : "stopped"
            }`}>
                <span className="status-dot"></span>

                {isScheduled ? "Scheduled" : "Not Scheduled"}
            </div>

            <div className="buttons">

                <button
                    onClick={handleStart}
                    disabled={isScheduled}
                >
                    Start
                </button>

                <button
                    onClick={handleCancel}
                    disabled={!isScheduled}
                >
                    Cancel
                </button>

                <button onClick={handleReset}>
                    Reset
                </button>

            </div>

            <p>Delay: 3000ms</p>

        </div>
    )
}
// Exercise 11 - KeyPress Component

import useKeyPress from '../src/hooks/useKeyPress.js'

export default function KeyPress() {

    const shiftPressed = useKeyPress("Shift")
    const escapePressed = useKeyPress("Escape")
    const enterPressed = useKeyPress("Enter")

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 11
            </span>

            <h2>useKeyPress</h2>

            <p>Detect keyboard key presses</p>

            <div className="keyboard-grid">

                <div className={`keyboard-key ${
                    shiftPressed ? "pressed" : ""
                }`}>
                    Shift
                    <span>{shiftPressed ? "Pressed" : "Released"}</span>
                </div>

                <div className={`keyboard-key ${
                    escapePressed ? "pressed" : ""
                }`}>
                    Esc
                    <span>{escapePressed ? "Pressed" : "Released"}</span>
                </div>

                <div className={`keyboard-key ${
                    enterPressed ? "pressed" : ""
                }`}>
                    Enter
                    <span>{enterPressed ? "Pressed" : "Released"}</span>
                </div>

            </div>

            <div className="keyboard-status">
                {shiftPressed || escapePressed || enterPressed
                    ? "Key detected!"
                    : "Waiting for key press..."
                }
            </div>

            <p>Press and hold Shift, Escape or Enter</p>

        </div>
    )
}
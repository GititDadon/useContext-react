// Exercise 9 - DocumentTitle Component

import useDocumentTitle from '../src/hooks/useDocumentTitle.js'
import useInput from '../src/hooks/useInput.js'

export default function DocumentTitle() {

    const { value, onChange, setValue, reset } =
        useInput("Custom Hooks Playground")

    useDocumentTitle(value)

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 09
            </span>

            <h2>useDocumentTitle</h2>

            <p>Update the browser tab title</p>

            <div className="browser-preview">

                <div className="browser-bar">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                </div>

                <div className="browser-tab">
                    {value || "Untitled"}
                </div>

                <div className="browser-content">
                    Browser title preview
                </div>

            </div>

            <input
                className="custom-input"
                type="text"
                placeholder="Enter page title..."
                value={value}
                onChange={onChange}
            />

            <div className="buttons">

                <button onClick={() => setValue("Hello React!")}>
                    Set Title
                </button>

                <button onClick={reset}>
                    Reset
                </button>

            </div>

        </div>
    )
}
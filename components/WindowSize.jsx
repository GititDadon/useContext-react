// Exercise 10 - WindowSize Component

import useWindowSize from '../src/hooks/useWindowSize.js'

export default function WindowSize() {

    const { width, height } = useWindowSize()

    const device =
        width < 768
            ? "Mobile"
            : width < 1024
            ? "Tablet"
            : "Desktop"

    return (
        <div className="exercise-card">

            <span className="exercise-number">
                EXERCISE 10
            </span>

            <h2>useWindowSize</h2>

            <p>Track browser window dimensions</p>

            <div className="window-size-grid">

                <div className="dimension-box">
                    <span>Width</span>
                    <h3>{width}</h3>
                    <span>px</span>
                </div>

                <div className="dimension-box">
                    <span>Height</span>
                    <h3>{height}</h3>
                    <span>px</span>
                </div>

            </div>

            <div className="device-display">
                <span>Screen type</span>
                <h3>{device}</h3>
            </div>

            <p>Resize your browser to see changes</p>

        </div>
    )
}
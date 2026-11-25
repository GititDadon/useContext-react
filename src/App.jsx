import Toggle from '../components/Toggle.jsx'
import Counter from '../components/Counter.jsx'
import CounterWithStep from '../components/CounterWithStep.jsx'
import Input from '../components/Input.jsx'
import Textarea from '../components/Textarea.jsx'
import Previous from '../components/Previous.jsx'
import Interval from '../components/Interval.jsx'
import Timeout from '../components/Timeout.jsx'
import DocumentTitle from '../components/DocumentTitle.jsx'
import WindowSize from '../components/WindowSize.jsx'
import KeyPress from '../components/KeyPress.jsx'
import './App.css'

export default function App() {
    return (
        <div className="app-container">

            <div className="page-heading">
                <span>REACT HOOKS LAB</span>
                <h1>Custom Hooks Playground</h1>
                <p>Reusable logic, cleaner components.</p>
            </div>

            <div className="exercises-grid">

                {/* Exercise 1 */}
                <Toggle />

                {/* Exercise 2 */}
                <Counter />

                {/* Exercise 3 */}
                <CounterWithStep />

                {/* Exercise 4 */}
                <Input />

                {/* Exercise 5 */}
                <Textarea />

                {/* Exercise 6 */}
                <Previous />

                {/* Exercise 7 */}
                <Interval />

                {/* Exercise 8 */}
                <Timeout />

                {/* Exercise 9 */}
                <DocumentTitle />

                {/* Exercise 10 */}
                <WindowSize />

                {/* Exercise 11 */}
                <KeyPress />

            </div>

        </div>
    )
}
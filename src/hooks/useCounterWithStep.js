// Exercise 3 - useCounterWithStep

import { useState } from 'react'

export default function useCounterWithStep(initial = 0, step = 1) {
    const [value, setValue] = useState(initial)

    function inc() {
        setValue(prev => prev + step)
    }

    function dec() {
        setValue(prev => prev - step)
    }

    function reset() {
        setValue(initial)
    }

    return {
        value,
        inc,
        dec,
        reset
    }
}
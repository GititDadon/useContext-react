// Exercise 2 - useCounter

import { useState } from 'react'

export default function useCounter(initial = 0) {
    const [value, setValue] = useState(initial)

    function inc() {
        setValue(prev => prev + 1)
    }

    function dec() {
        setValue(prev => prev - 1)
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
// Exercise 1 - useToggle

import { useState } from 'react'

export default function useToggle() {
    const [value, setValue] = useState(false)

    function toggle() {
        setValue(prev => !prev)
    }

    function setTrue() {
        setValue(true)
    }

    function setFalse() {
        setValue(false)
    }

    return {
        value,
        toggle,
        setTrue,
        setFalse
    }
}
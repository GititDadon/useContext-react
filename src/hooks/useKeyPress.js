// Exercise 11 - useKeyPress

import { useState, useEffect } from 'react'

export default function useKeyPress(key) {

    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {

        function handleKeyDown(event) {
            if (event.key === key) {
                setIsPressed(true)
            }
        }

        function handleKeyUp(event) {
            if (event.key === key) {
                setIsPressed(false)
            }
        }

        function handleBlur() {
            setIsPressed(false)
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)
        window.addEventListener("blur", handleBlur)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
            window.removeEventListener("blur", handleBlur)
        }

    }, [key])

    return isPressed
}
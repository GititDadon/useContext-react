// Exercise 7 - useInterval

import { useState, useEffect, useRef } from 'react'

export default function useInterval(
    callback,
    intervalMs = 1000,
    enabled = false
) {
    const [isRunning, setIsRunning] = useState(enabled)

    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        setIsRunning(enabled)
    }, [enabled])

    useEffect(() => {
        if (!isRunning) {
            return
        }

        const intervalId = setInterval(() => {
            callbackRef.current()
        }, intervalMs)

        return () => {
            clearInterval(intervalId)
        }

    }, [isRunning, intervalMs])

    function start() {
        setIsRunning(true)
    }

    function stop() {
        setIsRunning(false)
    }

    return {
        start,
        stop,
        isRunning
    }
}
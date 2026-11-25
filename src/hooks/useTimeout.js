// Exercise 8 - useTimeout

import { useState, useRef, useEffect } from 'react'

export default function useTimeout(
    callback,
    delayMs = 3000,
    enabled = false
) {
    const [isScheduled, setIsScheduled] = useState(enabled)

    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        setIsScheduled(enabled)
    }, [enabled])

    useEffect(() => {
        if (!isScheduled) {
            return
        }

        const timeoutId = setTimeout(() => {
            setIsScheduled(false)
            callbackRef.current()
        }, delayMs)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [isScheduled, delayMs])

    function start() {
        setIsScheduled(true)
    }

    function cancel() {
        setIsScheduled(false)
    }

    return {
        start,
        cancel,
        isScheduled
    }
}
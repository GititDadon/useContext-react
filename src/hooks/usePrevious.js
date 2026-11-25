// Exercise 6 - usePrevious

import { useRef, useEffect } from 'react'

export default function usePrevious(value) {
    const ref = useRef(undefined)

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}
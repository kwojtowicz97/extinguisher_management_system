import React, { forwardRef, useState, useEffect } from 'react'

let warned = false

const Div100vh = forwardRef(
  ({ style, ...other }, ref) => {
    const height = use100vh()

    // TODO: warn only in development
    if (!warned && style?.height) {
      warned = true
      console.warn(
        '<Div100vh /> overrides the height property of the style prop'
      )
    }
    const styleWithRealHeight = {
      ...style,
      height: height ? `${height}px` : '100vh'
    }
    return <div ref={ref} style={styleWithRealHeight} {...other} />
  }
)

Div100vh.displayName = 'Div100vh'

export default Div100vh

export function use100vh() {
  const [height, setHeight] = useState(measureHeight)

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce()

  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return

    function setMeasuredHeight() {
      const measuredHeight = measureHeight()
      setHeight(measuredHeight)
    }

    window.addEventListener('resize', setMeasuredHeight)
    return () => window.removeEventListener('resize', setMeasuredHeight)
  }, [wasRenderedOnClientAtLeastOnce])
  return wasRenderedOnClientAtLeastOnce ? height : null
}

export function measureHeight() {
  if (!isClient()) return null
  return window.innerHeight
}


function useWasRenderedOnClientAtLeastOnce() {
  const [
    wasRenderedOnClientAtLeastOnce,
    setWasRenderedOnClientAtLeastOnce
  ] = useState(false)

  useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true)
    }
  }, [])
  return wasRenderedOnClientAtLeastOnce
}

function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
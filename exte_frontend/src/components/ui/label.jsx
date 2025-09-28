import React, { forwardRef } from 'react'

// Safe forwardRef wrapper to prevent undefined errors
const safeForwardRef = forwardRef || React.forwardRef || ((component) => component)

const Label = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Label.displayName = 'Label'

export { Label }


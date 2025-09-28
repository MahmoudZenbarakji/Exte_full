import React, { forwardRef } from 'react'

// Safe forwardRef wrapper to prevent undefined errors
const safeForwardRef = forwardRef || React.forwardRef || ((component) => component)

const Card = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
      {...props}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  )
})
CardHeader.displayName = 'CardHeader'

const CardTitle = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

const CardDescription = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

const CardContent = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  )
})
CardContent.displayName = 'CardContent'

const CardFooter = safeForwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    />
  )
})
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

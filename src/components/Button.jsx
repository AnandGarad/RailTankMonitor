import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClass = 'font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/50',
    secondary: 'bg-card-dark text-white border border-gray-700 hover:border-primary/50 hover:text-primary',
    danger: 'bg-danger text-white hover:bg-danger/90',
    success: 'bg-success text-white hover:bg-success/90',
    warning: 'bg-warning text-black hover:bg-warning/90',
    ghost: 'text-primary hover:bg-primary/10',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </>
      ) : (
        <>
          {Icon && <Icon size={18} />}
          {children}
        </>
      )}
    </button>
  )
}

export default Button

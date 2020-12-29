import React from "react"
import cn from "classnames"
import "./buttons.css"

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
const Button = ({
  variant,
  color,
  hover,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  children,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  // let content = ""
  // if(startIcon) {content = startIcon + ' ' + children }
  // else {content = children}
  const startIconElement = startIcon ? <i className="material-icons">{startIcon}</i> : null
  const endIconElement = endIcon ? <i className="material-icons">{endIcon}</i> : null
  return (
    <button
      className={cn({
        [`button--variant-${variant}`]: variant,
        [`button--size-${size}`]: size,
        [`button--color-${color}`]: color,
        hover: hover,
        disableShadow: disableShadow,
        disabled: disabled,
        startIcon: startIcon,
        endIcon: endIcon,
      })}
      {...props}
    >
      {startIconElement}
      {children}
      {endIconElement}
    </button>
  )
}

export default Button

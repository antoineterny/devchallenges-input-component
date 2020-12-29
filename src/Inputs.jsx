import React from "react"
import cn from "classnames"
import "./inputs.scss"

const variantsMapping = {
  multiline: "textarea",
}

const Input = ({
  variant,
  label,
  helperText,
  color,
  hover,
  focus,
  disabled,
  startIcon,
  endIcon,
  size,
  children,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use input tag instead.
  const HTMLtag = variant ? variantsMapping[variant] : "input"

  const startIconElement = startIcon ? <i className="material-icons">{startIcon}</i> : null
  const endIconElement = endIcon ? <i className="material-icons">{endIcon}</i> : null
  const labelElement = label ? <label>{label}</label> : <label>Label</label>
  const helperTextElement = helperText ? <p>{helperText}</p> : null
  return (
    <div className="input-component">
      {labelElement}
      {startIconElement}
      {/* <input type="text" placeholder="MY PLACEHOLDER" disabled={false} defaultValue="VALUE" /> */}
      <HTMLtag
        className={cn({
          [`button--size-${size}`]: size,
          [`button--color-${color}`]: color,
          hover: hover,
          disabled: disabled,
          startIcon: startIcon,
          endIcon: endIcon,
        })}
        {...props}
      />
      {endIconElement}
      {helperTextElement}
    </div>

    // >
    //   {startIconElement}
    //   {children}
    //   {endIconElement}
    // </input>
  )
}

export default Input

import React from "react"
import cn from "classnames"
import "./inputs.scss"

const Input = ({
  label,
  helperText,
  placeholder,
  hover,
  focus,
  error,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  row,
  children,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use input tag instead.
  const HTMLtag = multiline ? "textarea" : "input"

  const startIconElement = startIcon ? (
    <i className="material-icons start-icon">{startIcon}</i>
  ) : null
  const endIconElement = endIcon ? <i className="material-icons end-icon">{endIcon}</i> : null
  const helperTextElement = helperText ? <p>{helperText}</p> : null
  return (
    <div className="input-component">
      {startIconElement}
      {/* <input type="text" placeholder="MY PLACEHOLDER" disabled={false} defaultValue="VALUE" /> */}
      <HTMLtag
        className={cn({
          // [`input--hover`]: hover,
          // [`input--focus`]: focus,
          [`input--size-${size}`]: size,
          hover: hover,
          focus: focus,
          error: error,
          startIcon: startIcon,
          endIcon: endIcon,
          fullWidth: fullWidth,
        })}
        {...props}
        placeholder={placeholder ? placeholder : "Placeholder"}
        rows={row}
      />
      <label>{label ? label : "Label"}</label>
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

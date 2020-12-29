import React from "react"
import Input from "./Inputs"
import "./App.scss"

const Label = ({ text, variant }) => {
  const cName = variant ? "component-label component-label-" + variant : "component-label"
  return <label className={cName}>{text}</label>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Inputs</header>
      <div className="btn-grid-3cols">
        <div className="input-wrapper">
          <Label text={`<Input />`} />
          <Input
            // startIcon="phone"
            // endIcon="lock"
            disabled={false}
            // error={false}
            hover={false}
            focus={false}
            label="Label"
            // helperText="un petit texte en plus"
          />
        </div>
        <div className="input-wrapper">
          <Label text={`&:hover`} variant="light" />
          <Input hover />
        </div>
        <div className="input-wrapper">
          <Label text={`&:focus`} variant="light" />
          <Input focus />
        </div>

        <div className="input-wrapper">
          <Label text={`<Input error />`} />
          <Input error />
        </div>
        <div className="input-wrapper">
          <Label text={`&:hover`} variant="light" />
          <Input error hover />
        </div>
        <div className="input-wrapper">
          <Label text={`&:focus`} variant="light" />
          <Input error focus />
        </div>

        <div className="input-wrapper">
          <Label text={`<Input disabled />`} />
          <Input disabled />
        </div>
      </div>

      <div className="btn-grid-2cols-large">
        <div className="input-wrapper">
          <Label text={`<Input helperText=”Some interesting text” />`} />
          <Input helperText="Some interesting text" />
        </div>
        <div className="input-wrapper">
          <Label text={`<Input helperText=”Some interesting text” error />`} />
          <Input helperText="Some interesting text" error />
        </div>

        <div className="input-wrapper">
          <Label text={`<Input startIcon="phone" />`} />
          <Input startIcon="phone" />
        </div>
        <div className="input-wrapper">
          <Label text={`<Input endIcon="lock" />`} />
          <Input endIcon="lock" />
        </div>

        <div className="input-wrapper span2">
          <Label text={`<Input value="text" />`} />
          <Input defaultValue="text" />
        </div>

        <div className="input-wrapper">
          <Label text={`<Input size="sm" />`} />
          <Input size="sm" />
        </div>
        <div className="input-wrapper">
          <Label text={`<Input size="md" />`} />
          <Input size="md" />
        </div>

        <div className="input-wrapper span2">
          <Label text={`<Input fullWidth />`} />
          <Input fullWidth />
        </div>
      </div>

      <div className="input-wrapper span2">
        <Label text={`<Input multiline row="4" />`} />
        <Input multiline row="4" />
      </div>

      {/* <textarea
          name="message"
          rows="4"
          cols="30"
          defaultValue="The cat was playing in the garden."
        /> */}
    </div>
  )
}

export default App

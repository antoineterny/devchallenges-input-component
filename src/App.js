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
        <div className="btn-group">
          <Label text={`<Input />`} />
          <Input
            endIcon="lock"
            disabled={false}
            error={true}
            placeholder={"Placehoooolder!!!"}
            label="mon petit label tranquille"
            helperText="un petit texte en plus"
          />
        </div>

        {/* <textarea
          name="message"
          rows="4"
          cols="30"
          defaultValue="The cat was playing in the garden."
        /> */}
      </div>
    </div>
  )
}

export default App

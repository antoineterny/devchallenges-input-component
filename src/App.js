import React from "react"
import Button from "./Buttons"
import "./App.css"

const Label = ({ text, variant }) => {
  const cName = variant ? "component-label component-label-" + variant : "component-label"
  return <label className={cName}>{text}</label>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Buttons</header>

      <div className="btn-grid-2cols">
        <div className="btn-group">
          <Label text={`<Button />`} />
          <Button>Default</Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button hover={true}>Default</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button variant="outline" />`} />
          <Button variant="outline">Outline</Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button variant="outline" hover={true}>
            Outline
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button variant="text" />`} />
          <Button variant="text">Text</Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button variant="text" hover={true}>
            Text
          </Button>
        </div>
        <div className="btn-group span2">
          <Label text={`<Button disableShadow />`} />
          <Button disableShadow={true}>Default</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button disabled />`} />
          <Button disabled={true}>Disabled</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button variant="text" disabled />`} />
          <Button variant="text" disabled={true}>
            Disabled
          </Button>
        </div>
      </div>

      <div className="btn-grid-2cols-large">
        <div className="btn-group">
          <Label text={`<Button startIcon="local_grocery_store" />`} />
          <Button startIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button endIcon="local_grocery_store" />`} />
          <Button endIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </div>
      </div>

      <div className="btn-grid-4cols">
        <div className="btn-group">
          <Label text={`<Button size="sm" />`} />
          <Button size="sm" color="primary">
            Small
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button size="md" />`} />
          <Button size="md" color="primary">
            Medium
          </Button>
        </div>
        <div className="btn-group span2">
          <Label text={`<Button size="lg" />`} />
          <Button size="lg" color="primary">
            Large
          </Button>
        </div>

        <div className="btn-group">
          <Label text={`<Button color="default" />`} />
          <Button color="default">Default</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button color="primary" />`} />
          <Button color="primary">Primary</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button color="secondary" />`} />
          <Button color="secondary">Secondary</Button>
        </div>
        <div className="btn-group">
          <Label text={`<Button color="danger" />`} />
          <Button color="danger">Danger</Button>
        </div>

        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button color="default" hover={true}>
            Default
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button color="primary" hover={true}>
            Primary
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button color="secondary" hover={true}>
            Secondary
          </Button>
        </div>
        <div className="btn-group">
          <Label text={`&:hover, &:focus`} variant="light" />
          <Button color="danger" hover={true}>
            Danger
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App

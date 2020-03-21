import React, { Component } from "react"
import WhereTogoTemplate from "./components/WhereToGoTemplate"
import Form from "./components/Form"
import TogoItemList from "./components/TogoItemList"

class App extends Component {
  id = 1
  state = {
    input: "",
    togos: [{ id: 0, text: "ex) London", checked: false }]
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  handleCreate = () => {
    const { input, togos } = this.state
    this.setState({
      input: "",
      togos: togos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate()
    }
  }

  handleToggle = id => {
    const { togos } = this.state
    const index = togos.findIndex(togo => togo.id === id)
    const selected = togos[index]
    const nextTogos = [...togos]

    nextTogos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      togos: nextTogos
    })
  }

  handleRemove = id => {
    const { togos } = this.state
    this.setState({
      togos: togos.filter(togo => togo.id !== id)
    })
  }

  render() {
    const { input } = this.state
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this

    return (
      <WhereTogoTemplate
        form={
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            onRemove={handleRemove}
          />
        }
      >
        <TogoItemList togos={this.state.togos} onToggle={handleToggle} onRemove={handleRemove} />
      </WhereTogoTemplate>
    )
  }
}

export default App

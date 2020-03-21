import React from "react"
import "./TogoItem.css"

class TogoItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props
    console.log(id)
    return (
      <div className="togo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation()
            onRemove(id)
          }}
        >
          &times;
        </div>
        <div className={`togo-text ${checked ? " checked" : ""}`}>
          <div> {text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    )
  }
}
export default TogoItem

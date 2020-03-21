import React from "react"
import TogoItem from "./TogoItem"

class TogoItemList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.togos !== nextProps.togos
  }

  render() {
    const { togos, onToggle, onRemove } = this.props
    //togos : togo객체들이 있는 배열
    //onToggle : 체크박스를 키고 끄는 함수
    //onRemove : 아이템을 삭제시키는 함수

    const togolist = togos.map(togo => {
      return (
        <TogoItem
          id={togo.id}
          text={togo.text}
          checked={togo.checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={togo.id}
        />
      )
    })

    return (
      <div>
        {togolist}
        {/* <TogoItem text={togos[0].text} />
        <TogoItem text="2222" />
        <TogoItem text="3333" /> */}
      </div>
    )
  }
}

export default TogoItemList

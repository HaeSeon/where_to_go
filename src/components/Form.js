import React from "react"
import "./Form.css"

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        Add
      </div>
    </div>
  )
}

//value : input 내용
//onCreate : Add버튼이 클릭될 때 실행될 함수
//onChange : 인풋 내용이 변경될때 실행되는 함수
//onKeyPress : Endter key

export default Form

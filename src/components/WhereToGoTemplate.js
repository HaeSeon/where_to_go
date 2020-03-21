import React from "react"
import "./WhereToGoTemplate.css"

const WhereTogoTemplate = ({ form, children }) => {
  //이 컴포넌츠는 두가지 props를 받게됨
  return (
    <main className="where-togo-template">
      <div className="title">Where do you wanna go?</div>
      <section className="form-wrapper">{form}</section>
      <section className="togos-wrapper">{children}</section>
    </main>
  )
}

export default WhereTogoTemplate

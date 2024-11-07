import React from 'react'

function title({main_title, sub_title}) {
  return (
    <div className="section-title">
    <h2>
    {main_title} <span>{sub_title}</span>
    </h2>
  </div>
  )
}

export default title;
import React from 'react'

function CheckBox({value, label, info, checked, onCheck}) {
  const iconClass = checked ? "fas fa-check mr-2" : "fas fa-times mr-2"
  return (
    <div className="col">
      <div className="card h-100">
        <div className={checked ? "card-header bg-success text-light" : "card-header"} id={value} onClick={onCheck}>
        <i className={iconClass}></i>{label}
        </div>
        <div className="card-body px-2">
          {info}
        </div>
      </div>
    </div>
  )
}

export default CheckBox;
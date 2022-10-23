import React from 'react'
import './Theme.css';
const Navbar = (props) => {
  return (
    <>
   
  <div className="navbar mb-2 p-3 bg-light d-flex justify-content-end">
   
    <div className="picker bg-primary mx-2" onClick={()=>{props.theme('primary')}}>
        </div>
    <div className="picker bg-danger mx-2" onClick={()=>{props.theme('danger')}}>
        </div>
    <div className="picker bg-info mx-2" onClick={()=>{props.theme('info')}}>
        </div>
    <div className="picker bg-warning mx-2" onClick={()=>{props.theme('warning')}}>
</div>
<div className="picker bg-success mx-2" onClick={()=>{props.theme('success')}}>
</div>
<div className="picker bg-dark border border-light mx-2" onClick={()=>{props.theme('dark')}}>
</div>
    </div>

    </>
  )
}
export default Navbar;

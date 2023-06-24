import React from 'react'
import style from './Form.module.css'
function Form() {
  return (
    <>  
    <h1>FORM</h1>
     <div className={style.container}>
         
        <input type="text" placeholder='Enter Company name' />
        <input type="text" placeholder='Enter owner Name' />
        <input type="text" placeholder='Enter Product name' />
        <input type="text" placeholder='Enter value of coupon' />
        <button>submit</button>

      
    </div>
    </>
 
  )
}

export default Form

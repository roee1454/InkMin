import React from 'react'
import '../css/AdminAuth.css'
import { useRef, useReducer } from 'react'
import { makePostRequest } from '../methods/makeRequest'
import TransitionDiv from '../components/TransitionDiv'

export default function ManagerAuth() {
  const [color, message, dispatch] = useReducer({}) 
  const adminPasswordRef = useRef()
  return (
    <TransitionDiv className='auth-wrapper'>
        <div className='input-wrapper'>
            <label>הקש סיסמת מנהל</label>
            <input ref={adminPasswordRef} onChange={(e) => {
              adminPasswordRef.current.value = e.target.value
            }} type='text' name='password' />
        </div>
        <div className='button-wrapper'>
            <button type="button" onClick={async (e) => {
                e.preventDefault()
                const response = await makePostRequest(`AdminAuth?password=${adminPasswordRef.current.value}`)
                if(response.status === 200){
                  window.location.href === "./"
                }
            }} className='btnLink'>כניסה</button>
        </div>
        <div style={{textAlign: "center"}} className='label-wrapper'>
          <label style={{color: 'red',}}>סיסמא לא נכונה</label>
        </div>
    </TransitionDiv>
  )
}

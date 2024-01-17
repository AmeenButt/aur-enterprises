import React, { useState } from 'react'
import AppContext from './appContext'
import baseUrl from 'url'
export default function AppState(props) {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [items, setitems] = useState([])
  const getData = async () => {
    await fetch(`${baseUrl}cart/get?userID=${localStorage.getItem('_id')}`).then(res=>res.json()).then(response=>{
        console.log(response)
        if(response.status){
            setitems(response.result)
        }
        else{
          setitems([])
        }
    })
}
  return (
    <AppContext.Provider value={{ showSignup, setShowSignup, showLogin,items,getData, setShowLogin, showCart, setShowCart }}>
      {props.children}
    </AppContext.Provider>
  )
}

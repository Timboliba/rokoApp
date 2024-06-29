import React from 'react'
import Navbar from '../navigationBar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Settings from '../settings/Settings'
import Chats from '../chats/Chats'



const  Container=()=> {
  return (
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='settings' element={<Settings/>}/>
                    <Route path='chats' element={<Chats/>}/>
                    <Route path='customers' element={<Settings/>}/>
                    <Route path='orders' element={<Settings/>}/>
                    <Route path='catalog' element={<Settings/>}/>
                </Routes>
            </BrowserRouter>
  )
}

export default Container
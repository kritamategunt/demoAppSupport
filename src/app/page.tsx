"use client"
import Image from 'next/image'
import Login from './login/page'
import useMsal from "../hooks/useMsal";


export default function Home() {
  const { isAuthenticated, user, login, logout } = useMsal();
  return (
    <div>
      {/* {!isAuthenticated ? (<Login />) : (<div>{isAuthenticated}</div>)} */}
    </div>
  )
}

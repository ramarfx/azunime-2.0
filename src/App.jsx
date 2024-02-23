import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Input from './components/elements/Input'

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Input placeholder={"nasi goreng"}  />
    </h1>
  )
}

import { useState } from 'react'
import logo from './assets/200-logo-black.png';
import Import from './Import'
import Login from './Login'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Avatar from './Avatar';
import { useStore } from './store';
import Spinner from './Spinner';

function App() {
  const { user, isLoading } = useStore()

  
  return (
    <>
    <main className='bg-white rounded-lg shadow-xl p-3'>
      <div className='flex justify-between items-center'>
      <img alt="Importlio Logo" className={`${!user ? 'mx-auto' : ''}`} src={logo} width="50" />
      {user && <Avatar user={user} />}
      </div>
      <h1 className='uppercase tracking-wider	text-6xl'>IMPORTLIO</h1>
      <h2
        className='text-2xl uppercase font-bold text-gray-500 text-center mb-3'
      >
        Shopify Product Importer
      </h2>

      {isLoading && <Spinner lg />}
      {!isLoading && user ? <Import /> : <Login />}
       

    </main>
    <Toaster />
    </>
  )
}

export default App

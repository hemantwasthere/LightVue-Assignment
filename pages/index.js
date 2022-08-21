import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Repositories from '../components/Repositories'
import UserProfile from '../components/UserProfile'

export default function Home() {

  const [searchValue, setSearchValue] = useState('')
  const [user, setUser] = useState({})

  const fetchUser = (e) => {
    if (e.key === 'Enter') {
      const options = { method: 'GET' };
      fetch(`https://api.github.com/users/${searchValue}`, options)
        .then(response => response.json())
        .then(response => setUser(response))
        .catch(err => console.error(err + '💀💀💀💀'));
      setSearchValue('')
    }
  }

  return (
    <div>
      <Head>
        <title>GitHub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header fetchUser={fetchUser} searchValue={searchValue} setSearchValue={setSearchValue} user={user} setUser={setUser} />
      <div className='md:grid grid-cols-3 '>
        <UserProfile user={user} />
        <Navbar user={user} />
      </div>
      {/* <Repositories user={user} /> */}

    </div>
  )
}

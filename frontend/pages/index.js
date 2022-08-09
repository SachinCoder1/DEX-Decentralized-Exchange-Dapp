import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'

export default function Home() {
  return (
    <div classnames="  ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-300 min-h-screen'>
        <Navbar />
      </main>
       
    </div>
  )
}

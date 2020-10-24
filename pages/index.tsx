import Head from 'next/head'


import { TextField } from '../components/TextField'

// Use shortcut rh to create a typescript functional component

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Nextjs + TypeScript + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto max-w-2xl pt-16 px-6'>
        <TextField text='Hello' />
        <main>
          <h1 className='text-4xl font-bold'>Nextjs + TypeScript + TailwindCSS</h1>
        </main>
      </div>
    </div>
  )
}

export default Home
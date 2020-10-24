import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs + TypeScript + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto max-w-2xl pt-16 px-6'>
        <main>
          <h1 className='text-4xl font-bold'>Nextjs + TypeScript + TailwindCSS</h1>
        </main>
      </div>
    </div>
  )
}

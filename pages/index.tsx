import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>magikwand</title>
        <meta
          name="description"
          content="A keyboard shortcut that will 20x your writing and reading."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo@2x.png" />
      </Head>

      <main className="flex h-screen w-full flex-col items-center justify-center">
        <div className="flex max-w-4xl flex-col rounded-xl border p-6">
          <div className="flex items-center gap-2">
            <img className="h-8" src="/logo-black.png" />
            <h1 className="text-lg font-medium">magikwand</h1>
          </div>
          <br />
          <div></div>
          <p>A keyboard shortcut that will 20x your writing and reading.</p>
          <br />
          <p>int +99</p>
          <p>agi +99</p>
          <p>dex +99</p>
          <br />
          <p>increase productivity by 50%</p>
          <p>reduce writing/reading time by 50%</p>
          <p>decrease brain cell consumption by 50%</p>
          <br />
          <p>type: tool</p>
          <p>applicable jobs: every job</p>
          <p>class: one handed</p>
          <p>
            download:{' '}
            <a className="text-indigo-500" href="/magikwand-0.1.0-arm64-mac.zip" download>
              macOS
            </a>
          </p>
          <p>
            built by:{' '}
            <a className="text-indigo-500" href="https://twitter.com/_patrickpc" target="_blank">
              @_patrickpc
            </a>
          </p>
        </div>
      </main>
    </>
  )
}

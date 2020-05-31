import Head from 'next/head'
import IntroLogoLeft from '../components/layout/intro/IntroLogoLeft'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nanocosmos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroLogoLeft title="Live stream your interactive use cases with ultra-low latency" subtitle="Lorem ipsum dolor sit amet" />
    </div>
  )
}

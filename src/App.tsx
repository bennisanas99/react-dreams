import { Suspense, lazy } from 'react'
import './App.css'
import { Helmet } from 'react-helmet'

// Works also with SSR as expected
const Homepage = lazy(() => import('./components/Homepage'))
const Services = lazy(() => import('./components/Services'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <Helmet>
          <title>Dreams</title>
          <meta name="description" content="this site is for people that needs to create a website, a mobile app, manage website seo, manage google analytics and mental coaching using nlp" />
          <meta name="keywords" content="react, service, website creator, nlp, pnl, create a mobile app, manage website seo, manage google analytics" />
          <meta name="author" content="Anas Bennis" />
          <meta property="og:title" content="Dreams" />
          <meta property="og:description" content="this site is for people that needs to create a website, a mobile app, manage website seo, manage google analytics and mental coaching using nlp" />
          {/* <meta property="og:image" content="https://example.com/image.jpg" />
          <meta property="og:url" content="https://example.com/my-page" /> */}
          <meta name="twitter:title" content="Dreams" />
          <meta name="twitter:description" content="Tthis site is for people that needs to create a website, a mobile app, manage website seo, manage google analytics and mental coaching using nlp" />
          {/* <meta name="twitter:image" content="https://example.com/image.jpg" />
          <meta name="twitter:card" content="summary_large_image" /> */}
        </Helmet>
      </div>
      <Suspense fallback={<p>Loading homepage component...</p>}>
        <Homepage />
      </Suspense>
      <Suspense fallback={<p>Loading service component...</p>}>
        <Services />
      </Suspense>
      <Suspense fallback={<p>Loading footer component...</p>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

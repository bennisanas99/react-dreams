import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Booking from './components/Booking'
import Homepage from './components/Services'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
},
{ path: '/Home',
  element: <App/>
},
{
  path: '/Booking',
  element: <Booking/>
}



])


ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router}/>
)

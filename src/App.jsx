import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog/Blog'
import Home from './components/Pages/Home/Home'
import NotFound from './components/Pages/NotFound'
import Layout from './Layout/Layout'

const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
        {index:true, element:<Home/>},
        {path:'/home', element:<Home/>},
        {path:'/blog', element:<Blog/>},
        {path:'/about', element:<About/>},
        {path:'*', element:<NotFound/>},
    ]
    },
    

])

export default function App() {
  return (
    <>
    <RouterProvider router={routes}/> 
    </>
  )
}

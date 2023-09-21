import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';


const router  =  createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/Users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/post',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Post></Post>
      },
      {
        path:'/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
    
  }
])

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <div>Hello from react router!!!</div>
//   },
//   {
//     path:'/about',
//     element:<div>I am in the about page!!!</div>
//   },
//   {
//     path:'/contact',
//     element: <div>Call me right now!!!</div>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <RouterProvider router={router}></RouterProvider> */}
   {/* <App></App> */}
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

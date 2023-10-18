import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './scss/global.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

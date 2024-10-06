import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import Signup from "../pages/Signup"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import { MainLayout } from "../layout/MainLayout"
import { Items } from "../pages/Items"
import path from "path"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Login/>,
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <MainLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'inventory',
                element: <Items/>
            },
            {
                path: 'stocks',
                element: <Items/>
            },
            {
                path: 'supplier',
                element: <Items/>
            },
            {
                path: 'reports',
                element: <Items/>
            },
            {
                path: 'user',
                element: <Items/>
            }
        ]
    }
    
  ])
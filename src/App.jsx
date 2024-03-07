import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Sign from './components/customer/Sign'
import Login from './components/customer/Login'
import Nav from './components/customer/Nav'
import MenuDoc from './components/customer/MenuDoc'
import Payments from './components/customer/Payments'
import Mdoc from './components/Merchant/Mdoc'
import Mlogin from './components/Merchant/Mlogin'
import Mnav from './components/Merchant/Mnav'
import PaymentRequest from './components/Merchant/PaymentRequest'
import Dash from "./components/Merchant/Dash";


import { Toaster } from "@/components/ui/toaster"

import { UserContext } from './context/userContext'

import Dashboard from './components/customer/Dashboard'
import Mpayments from './components/Merchant/Mpayments'

function App() {

  const [user, setUser] = useState({ 
    isLoggedIn: false, 
    username: "",
    admin: false
  });

    useEffect(() => {
        const verify = async () => {
            const token = localStorage.getItem("userToken");
            console.log(token);
            if (token) {
                const response = await fetch("http://localhost:3000/auth/verify", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                    },
                });
                const data = await response.json();
                console.log("here")
                console.log(data.username)
                if (data.username) {
                    console.log("Setting user...");
                    setUser({ isLoggedIn: true, username: data.username, admin: false });
                    console.log("User after setting:", user);
                }
            }

            console.log(user)
        }

        verify()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Toaster />
                <Routes>
                    <Route
                        path="/login"
                        element={
                            user.isLoggedIn ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Login/>
                            )
                        }
                    />
                    <Route
                        path="/sign"
                        element={
                            user.isLoggedIn ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Sign/>
                            )
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            user.isLoggedIn ? (
                                <Dashboard />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                </Routes>
            </Router>
        </UserContext.Provider>
    )
}

export default App

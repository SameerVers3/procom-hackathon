import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Sign from './components/customer/Sign'
import Login from './components/customer/Login'
import Nav from './components/customer/Nav'
import MenuDoc from './components/customer/MenuDoc'
import Payments from './components/customer/Payments'
import Mdoc from './components/Merchant/Mdoc'
import Mnav from './components/Merchant/Mnav'
import PaymentRequest from './components/Merchant/PaymentRequest'
import Mlogin from "./components/Merchant/Mlogin"
import Mdashboard from './components/Merchant/Mdashboard'
import Footer from './components/Merchant/Footer'

import { Toaster } from "@/components/ui/toaster"

import { UserContext } from './context/userContext'

import Dashboard from './components/customer/Dashboard'
import Customers from './components/Merchant/Customers'
import Home from './components/Merchant/Home'

function App() {

  const [user, setUser] = useState({ 
    isLoggedIn: false, 
    username: "",
    admin: false
  });

    useEffect(() => {
        const verify = async () => {
            const token = localStorage.getItem("userToken");  
            const admintoken = localStorage.getItem("adminToken");
            if (admintoken){
                const response = await fetch("http://localhost:3000/auth/verify", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${admin}`,
                    },
                });
                const data = await response.json();
                console.log("here")
                console.log(data.username)
                if (data.username) {
                    console.log("Setting user...");
                    setUser({ isLoggedIn: true, username: data.username, admin: true });
                    console.log("User after setting:", user);
                }
            }
            else if (token){
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
        // <UserContext.Provider value={{ user, setUser }}>
        //     <Router>
        //         <Toaster />
        //         <Routes>
        //         <Route
        //                 path="/adminlogin"
        //                 element={
        //                     user.isLoggedIn && user.admin ? (
        //                         <Navigate to="/admindashboard" />
        //                     ) : (
        //                         <Mlogin/>
        //                     )
        //                 }
        //             />
        //             <Route
        //                 path="/admindashboard"
        //                 element={
        //                     user.isLoggedIn && user.admin? (
        //                         <Mdashboard />
        //                     ) : (
        //                         <Navigate to="/adminlogin" />
        //                     )
        //                 }
        //             />
        //             <Route
        //                 path="/login"
        //                 element={
        //                     user.isLoggedIn && !user.admin ? (
        //                         <Navigate to="/dashboard" />
        //                     ) : (
        //                         <Login/>
        //                     )
        //                 }
        //             />
        //             <Route
        //                 path="/sign"
        //                 element={
        //                     user.isLoggedIn? (
        //                         <Navigate to="/dashboard" />
        //                     ) : (
        //                         <Sign/>
        //                     )
        //                 }
        //             />
        //             <Route
        //                 path="/dashboard"
        //                 element={
        //                     user.isLoggedIn && !user.admin ? (
        //                         <Dashboard />
        //                     ) : (
        //                         <Navigate to="/login" />
        //                     )
        //                 }
        //             />
        //         </Routes>
        //     </Router>
        // </UserContext.Provider>
        <>
        <Mnav></Mnav>
        </>
    )
}

export default App

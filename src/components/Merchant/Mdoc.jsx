import react from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button";


const Mdoc = () => {

    const [showDashboard, setShowDashboard] = useState(true)
    const [showPayments, setShowPayments] = useState(false)
    const [showCustomers, setShowCustomers] = useState(false)
    const [showPaymentRequest, setShowPaymentRequest] = useState(false)
    const [showReport, setShowReport] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    
    const handleClicked = (e) => {
        if (e.target.textContent === "Dashboard") {
            setShowDashboard(true)
            setShowPayments(false)
            setShowCustomers(false)
            setShowPaymentRequest(false)
            setShowReport(false)
            setShowSettings(false)
        }
        if (e.target.textContent === "Payments") {
            setShowDashboard(false)
            setShowPayments(true)
            setShowCustomers(false)
            setShowPaymentRequest(false)
            setShowReport(false)
            setShowSettings(false)
        }
        if (e.target.textContent === "Customers") {
            setShowDashboard(false)
            setShowPayments(false)
            setShowCustomers(true)
            setShowPaymentRequest(false)
            setShowReport(false)
            setShowSettings(false)
        }
        if (e.target.textContent === "Payment Request") {
            setShowDashboard(false)
            setShowPayments(false)
            setShowCustomers(false)
            setShowPaymentRequest(true)
            setShowReport(false)
            setShowSettings(false)
        }
        if (e.target.textContent === "Report") {
            setShowDashboard(false)
            setShowPayments(false)
            setShowCustomers(false)
            setShowPaymentRequest(false)
            setShowReport(true)
            setShowSettings(false)
        }
        if (e.target.textContent === "Settings") {
            setShowDashboard(false)
            setShowPayments(false)
            setShowCustomers(false)
            setShowPaymentRequest(false)
            setShowReport(false)
            setShowSettings(true)
        }
    }

    return (
        <div className="flex">
            
            <div className="w-72 bg-neutral-50 fixed left-0 top-0 bg-white">
                <div className="mt-28 flex h-screen flex-col gap-6">
                    {
                        showDashboard ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Dashboard</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Dashboard</Button>
                    }
                    {
                        showPayments ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Payments</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Payments</Button>
                    }
                    {
                        showCustomers ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Customers</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Customers</Button>
                    }
                    {
                        showPaymentRequest ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Payment Request</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Payment Request</Button>
                    }
                    {
                        showReport ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Report</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Report</Button>
                    }
                    {
                        showSettings ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Settings</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Settings</Button>
                    }
                </div>
            </div>

            <div className=" ml-72 mt-16 p-6 flex w-full justify-center">
                {
                    showDashboard && <div>Dashboard</div>
                }
                {
                    showPayments && <div>Payments</div>
                }
                {
                    showCustomers && <div>Customers</div>
                }
                {
                    showPaymentRequest && <div>Payment Request</div>
                }
                {
                    showReport && <div>Report</div>
                }
                {
                    showSettings && <div>Settings</div>
                }
            </div>
        </div>
    )
}

export default Mdoc
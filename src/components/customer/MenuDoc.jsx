import react from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import Payments from "./Payments";
import InstantPayment from "./InstantPayment";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const MenuDoc = () => {

    const [showPayment, setShowPayment] = useState(true)
    const [showInstantPayment, setShowInstantPayment] = useState(false)
    const [showQrCode, setShowQrCode] = useState(false)

    const handleClicked = (e) => {
        if (e.target.textContent === "Payment") {
            setShowPayment(true)
            setShowInstantPayment(false)
            setShowQrCode(false)
        }
        if (e.target.textContent === "Instant Payment") {
            setShowPayment(false)
            setShowInstantPayment(true)
            setShowQrCode(false)
        }
        if (e.target.textContent === "Qr code") {
            setShowPayment(false)
            setShowInstantPayment(false)
            setShowQrCode(true)
        }
    }

    return (
        <div className="flex">
            
            <div className="w-72 bg-neutral-50 fixed left-0 top-0 bg-white">
                <div className="mt-28 flex h-screen flex-col gap-6">
                    {
                        showPayment ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Payment</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Payment</Button>
                    }
                    {
                        showInstantPayment ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Instant Payment</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Instant Payment</Button>
                    }
                    {
                        showQrCode ? <Button onClick={handleClicked} className="mx-6 bg-[#32C6DF] hover:bg-[#32C6DF] text-white">Qr code</Button> : <Button className="mx-6 text-black bg-slate-100 hover:bg-slate-200" onClick={handleClicked}>Qr code</Button>
                    }
                </div>
            </div>

            <div className=" ml-72 mt-16 p-6 flex w-full justify-center">
                {
                    showPayment && <Payments/>
                }
                {
                    showInstantPayment && <InstantPayment/>
                }
                {
                    showQrCode && <div>Qr code</div>
                }
            </div>
        </div>
    )
}

export default MenuDoc
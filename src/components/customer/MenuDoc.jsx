import react from "react"
import { Button } from "@/components/ui/button";
import Payments from "./Payments";


const MenuDoc = () => {
    return (
        <div className="flex">
            <div className="w-72 border fixed left-0 top-0 bg-white">
                <div className="mt-28 flex h-screen flex-col gap-6 border">
                    <Button className="mx-6">Payment</Button>
                    <Button className="mx-6">Instant Payment</Button>
                    <Button className="mx-6">Qr code</Button>
                </div>
            </div>

            <div className="border  ml-72 mt-16 p-6 flex justify-center">
                
                <Payments/>
            </div>
        </div>
    )
}

export default MenuDoc
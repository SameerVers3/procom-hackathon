import react from "react"
import { Button } from "@/components/ui/button";


const MenuDoc = () => {
    return (
        <div className="w-72 border h-screen fixed left-0 top-0 bg-white">
            <div className="mt-28 flex flex-col gap-6 border">
                <Button className="mx-6">Hello world</Button>
                <Button className="mx-6">Hello world</Button>
                <Button className="mx-6">Hello world</Button>
            </div>
        </div>
    )
}

export default MenuDoc
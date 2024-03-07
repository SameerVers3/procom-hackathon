import React, { useState } from "react";
import Nav from "../customer/Nav";
import MenuDoc from "../customer/MenuDoc";
import { Label } from "@/components/ui/label";
import dashboard from "../../assets/dashboard.png";
const Dash = () => {
    return(
        <>
            <div>
                <div>
                    <Nav></Nav>
                </div>
                
                <div className="mt-28 mx-10">
                    <h1 className="text-2xl"><b>Dashboard</b></h1>
                </div>

                <div className="border m-5 bg-slate-50 rounded-lg">
                    <div className="p-5 px-10">
                        <Label className="text-xl">Getting Started With Us</Label>
                    </div>

                        <div>
                            <img src={dashboard} />
                        </div>
                    <div className="p-5 flex gap-52">
                        
                        <div className="flex flex-col">
                            <Label className="text-xl">Monitor payment</Label>
                            <br />
                            <p className="text-gray-600">View real-time updates on successful payments,<br />refunds, and other transaction-related activities</p>
                            <br />
                            <a className="text-purple-600" href="#">Read More</a>
                        </div>

                        <div className="flex flex-col">
                            <Label className="text-xl">Manage Customers</Label>
                            <br />
                            <p className="text-gray-600">Access customer information, view their<br />transaction, and manage recurring payments</p>
                            <br />
                            <a className="text-purple-600" href="#">Read More</a>
                        </div>

                        <div className="flex flex-col">
                            <Label className="text-xl">Analyze Performance</Label>
                            <br />
                            <p className="text-gray-600">Track key metrics, and gain insights into your<br />business's financial performance and trends</p>
                            <br />
                            <a className="text-purple-600" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash
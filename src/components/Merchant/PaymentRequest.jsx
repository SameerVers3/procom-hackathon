import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";



import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'



const PaymentRequest = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <div className="mt-16">
                <h1 className="text-2xl"><b>Payment Request</b></h1>
                </div>
                <Separator className="my-4 w-[700px]" />
                <div className="border-inherit border rounded-lg p-5">
                    <div className="flex gap-6">
                        <div className="w-48 flex justify-start flex-col gap-3">
                            <Label htmlFor="customername" className="mr-auto">
                                Customer Name
                            </Label>
                            <Input className="bg-slate-100" id="customername" placeholder="Enter customer name" />
                        </div>
                        <div className="w-64 flex justify-start flex-col gap-3">
                            <Label htmlFor="customeremail" className="mr-auto">
                               Customer Email Address(Optional)
                            </Label>
                            <Input className="bg-slate-100" id="customeremail" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-5">
                        <div className="flex justify-start flex-col gap-3">
                            <Label htmlFor="paymentamount" className="mr-auto">
                                Payment Amount
                            </Label>
                            <Input className="bg-slate-100" id="paymentamount" placeholder="abc@gmail.com" />
                        </div>
                        <div className=" flex justify-start flex-col gap-3">
                            <Label htmlFor="merchantaccount" className="mr-auto">
                                Merchant Account Number
                            </Label>
                            <Input className="bg-slate-100" id="merchantaccount" placeholder="0123456789" />
                        </div>

                        <div className=" flex justify-start flex-col gap-3">
                            <Label htmlFor="customeraccount" className="mr-auto">
                                Customer Account Number
                            </Label>
                            <Input className="bg-slate-100" id="customeraccount" placeholder="0123456789" />
                        </div>

                        <div className="">
                            <Label htmlFor="bankname" className="mr-auto">
                                Select Customer Bank Name
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a bank" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Banks</SelectLabel>
                                        <SelectItem value="bankalhabib">Bank Al Habib</SelectItem>
                                        <SelectItem value="meezanbank">Meezan Bank</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex justify-start flex-col gap-3">
                            <Label htmlFor="paymentpurpose" className="mr-auto">
                                Payment Purpose
                            </Label>
                            <Textarea className="bg-slate-100"></Textarea>
                        </div>
                        <Button className="mt-4 w-36 ml-auto bg-purple-600 hover:bg-white hover:text-purple-600 hover:border-2">Request</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentRequest;

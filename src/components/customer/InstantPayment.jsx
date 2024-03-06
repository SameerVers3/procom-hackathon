import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Textarea } from "@/components/ui/textarea";


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
import { Separator } from '@/components/ui/separator'



const InstantPayment = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-screen gap-8">
                <h1 className="text-2xl"><b>Instant Payment</b></h1>
                <div>
                    <div className="flex gap-6">
                        <div className="w-48 flex justify-start flex-col gap-3">
                            <Label htmlFor="username" className="mr-auto">
                                Username
                            </Label>
                            <Input className="bg-slate-100" id="username" placeholder="Enter user name" />
                        </div>
                        <div className="w-64 flex justify-start flex-col gap-3">
                            <Label htmlFor="email" className="mr-auto">
                                Email Address(Optional)
                            </Label>
                            <Input className="bg-slate-100" id="email" placeholder="Enter your email address" />
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

                        <div className="">
                            <Label htmlFor="bankname" className="mr-auto">
                                Select Bank Name
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
                        <Button className="mt-4">Pay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstantPayment;

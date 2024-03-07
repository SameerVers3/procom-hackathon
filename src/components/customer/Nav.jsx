import React from 'react'

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
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import wallet from "../../assets/wallet.png"

const Nav = () => {
    
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);


    const logout = () => {
        console.log("logout")
        localStorage.removeItem("userToken");
        setUser({ isLoggedIn: false, username: "", admin: false });
        navigate("/login")
    }

    return (
        <div className="border flex justify-between fixed bg-white top-0 left-0 w-full z-10 p-4 px-16">
            <div className='flex gap-4'>
                <img src={wallet} />
                <div className="flex items-center text-xl font-semibold">Customer Portal</div>
            </div>
            <div className="flex border items-center ">
                <div>Icons Here</div>

                <div className="mx-4">
                    <Select>
                        <SelectTrigger className="w-[125px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Separator orientation="vertical" />

                <div className="mx-4">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger>{user ? user.username : "undefined"}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logout} className="bg-red-500 hover:bg-red-700 text-white"><div className='mx-auto'>Logout</div></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Nav

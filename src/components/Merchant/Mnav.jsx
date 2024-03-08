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

const Mnav = () => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);


    const logout = () => {
        console.log("logout")
        localStorage.removeItem("adminToken");
        setUser({ isLoggedIn: false, username: "", admin: false });
        navigate("/merchantlogin")
    }

    return (
        <div className="border flex justify-between fixed bg-white top-0 left-0 w-full z-10 p-4 px-16">
            <div className='flex gap-4'>
                <img src={wallet} />
                <div className="flex items-center text-xl font-semibold">PayHabib</div>
            </div>
            <div className="flex items-center ">


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
                    <DropdownMenuTrigger>
                        {
                            user.username 
                            ? <div className="text-sm font-semibold">{user.username}</div>
                            : <div className="text-sm font-semibold">My Account</div>
                        } 
                    </DropdownMenuTrigger>
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

export default Mnav

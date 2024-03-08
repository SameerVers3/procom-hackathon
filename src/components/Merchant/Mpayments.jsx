import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Label } from "@/components/ui/label";
import dots from "../../assets/dots.png";
import tick from "../../assets/tick.png";
import clock from "../../assets/clock.png";

// Import pagination components from shadcn/ui
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const rowsPerPage = 7; // Number of rows per page

const Mpayments = () => {
    const [page, setPage] = useState(1);
    const [payment, setPayment] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/request/data', {
                    method: 'GET',
                    headers: {
                        'Authorization': `${localStorage.getItem('adminToken')}`
                    }
                });
                const data = await response.json();
                console.log(data)
                setPayment(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        console.log(payment);
    }, []);

    const count = Math.ceil(payment.length / rowsPerPage);
    const rows = payment.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handlePrevious = () => {
        setPage(page > 1 ? page - 1 : page);
    };

    const handleNext = () => {
        setPage(page < count ? page + 1 : page);
    };

    const getclasses = (status) => {
        if (status === 'succeeded') {
            return 'text-green-500 bg-green-100 rounded-2xl p-2';
        } else if (status === 'pending') {
            return 'text-yellow-500 bg-yellow-100 rounded-2xl p-2';
        } else if (status === 'rejected') {
            return 'text-red-500 bg-red-100 rounded-2xl p-2';
        }
    }

    const paymentSummary = payment.reduce((acc, curr) => {
        const amount = Number(curr.amount); // Convert amount to a number
    
        console.log(amount)
        if (isNaN(amount)) {
            return acc;
        }
        acc.total.amount += amount;
        acc.total.records += 1;
    
        if (curr.status === 'succeeded') {
            acc.succeeded.amount += amount;
            acc.succeeded.records += 1;
        } else if (curr.status === 'pending') {
            acc.pending.amount += amount;
            acc.pending.records += 1;
        } else if (curr.status === 'rejected') {
            acc.rejected.amount += amount;
            acc.rejected.records += 1;
        }
    
        return acc;
    }, {
        total: { amount: 0, records: 0 },
        succeeded: { amount: 0, records: 0 },
        pending: { amount: 0, records: 0 },
        rejected: { amount: 0, records: 0 }
    });
    

    return (
        <div className='m-5'>
            <div className="">
            <Label><h1 className='text-2xl mb-5'>Payments</h1></Label>
                <div className="flex gap-20 p-4 mb-16">
                    <div className="p-4 flex gap-4 max-w-72 bg-purple-50 ease-in duration-300 border border-transparent rounded-lg hover:border-[#C940EC]">
                        <div className='flex-col'>
                            <div className=''>
                                <span className='text-gray-500'>All Payments</span>
                            </div>
                            <div className='mt-2'>
                                <b><h2 className='text-2xl'>{paymentSummary.total.amount} PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-[#C940EC]">
                                <span className='text-[#C940EC]'>{paymentSummary.total.records} records</span>
                            </div>
                        </div>
                        <div>
                            <img className='w-auto h-10 rounded-2xl' src={dots}/>
                        </div>
                    </div>

                    <div className="p-4 flex gap-4 max-w-72 bg-green-50 ease-in duration-300 border border-transparent rounded-lg hover:border-green-500">
                        <div className='flex-col'>
                            <div className=''>
                                <span className='text-gray-500'>Succeeded</span>
                            </div>
                            <div className='mt-2'>
                                <b><h2 className='text-2xl'>{paymentSummary.succeeded.amount} PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-green-600">
                                <span className='text-green-600'>{paymentSummary.succeeded.records} records</span>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-auto h-10 rounded-2xl' src={tick}/>
                        </div>
                    </div>
                    <div className="p-4 flex gap-4 max-w-72 bg-yellow-50 ease-in duration-300 border border-transparent rounded-lg hover:border-yellow-500">
                        <div className='flex-col'>
                            <div className=''>
                                <span className='text-gray-500'>Pending</span>
                            </div>
                            <div className='mt-2'>
                                <b><h2 className='text-2xl'>{paymentSummary.pending.amount} PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-yellow-600">
                                <span className='text-yellow-600'>{paymentSummary.pending.records} records</span>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-auto h-10 rounded-2xl' src={clock}/>
                        </div>
                    </div>

                    <div className="p-4 flex gap-4 max-w-72 bg-red-50 ease-in duration-300 border border-transparent rounded-lg hover:border-red-500">
                        <div className='flex-col'>
                            <div className=''>
                                <span className='text-gray-500'>Rejected</span>
                            </div>
                            <div className='mt-2'>
                                <b><h2 className='text-2xl'>{paymentSummary.rejected.amount} PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-red-500">
                                <span className='text-red-500'>{paymentSummary.rejected.records} records</span>
                            </div>
                        </div>
                        <div className=''>
                            <img className='w-auto h-10 rounded-2xl' src={clock}/>
                        </div>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Customer Account No.</b></TableCell>
                                <TableCell><b>Status</b></TableCell>
                                <TableCell><b>Description</b></TableCell>
                                <TableCell><b>Bank</b></TableCell>
                                <TableCell><b>Date</b></TableCell>
                                <TableCell><b>Customer</b></TableCell>
                                <TableCell><b>Amount</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.accountNumber}>
                                    <TableCell><span className='text-blue-500'>{row.accountNumber}</span></TableCell>
                                    <TableCell><span className={`${getclasses(row.status)}`}>{row.status}</span></TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.bank}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.customer}</TableCell>
                                    <TableCell><b>{row.amount}</b></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='m-5 float-right'>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={handlePrevious} />
                        </PaginationItem>
                        {/* Render page numbers here */}
                        {Array.from({ length: count }, (_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink onClick={() => setPage(i + 1)} isActive={page === i + 1}>
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={handleNext} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                </div>
            </div>
        </div>
    );
}

export default Mpayments;

import React, { useState } from 'react';
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

function createData(
    customerAccountNo,
    status,
    description,
    bank,
    date,
    customer,
    amount,
) {
    return { customerAccountNo, status, description, bank, date, customer, amount, };
}

// Mock data for the table
const allRows = [
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234erf3e0123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),
    createData('1234567890123', 'Pending', 'Payment Purpose', 'HBL', 'Feb 15, 2023', 'Ali', '890 PKR'),

    // ... add all your rows here
];

const rowsPerPage = 7; // Number of rows per page

const Mpayments = () => {
    const [page, setPage] = useState(1);
    const count = Math.ceil(allRows.length / rowsPerPage);
    const rows = allRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handlePrevious = () => {
        setPage(page > 1 ? page - 1 : page);
    };

    const handleNext = () => {
        setPage(page < count ? page + 1 : page);
    };

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
                                <b><h2 className='text-2xl'>1380 PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-[#C940EC]">
                                <span className='text-[#C940EC]'>234 records</span>
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
                                <b><h2 className='text-2xl'>2380 PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-green-600">
                                <span className='text-green-600'>234 records</span>
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
                                <b><h2 className='text-2xl'>380 PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-yellow-600">
                                <span className='text-yellow-600'>4 records</span>
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
                                <b><h2 className='text-2xl'>590 PKR</h2></b>
                            </div>
                            <div className="border mt-2 px-3 rounded-2xl border-solid border-red-500">
                                <span className='text-red-500'>4 records</span>
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
                                <TableRow key={row.customerAccountNo}>
                                    <TableCell><span className='text-blue-500'>{row.customerAccountNo}</span></TableCell>
                                    <TableCell><span className='text-green-500 bg-green-50 rounded-2xl p-2'>{row.status}</span></TableCell>
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

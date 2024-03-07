import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
    return { customerAccountNo, status, description, bank, date, customer, amount,};
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
        <div className='border ml-16'>
            <div className='border'>
                <h2>Payments</h2>
                <div className="flex gap-8 border p-4">
                    <div className="p-4 border max-w-72">
                        <h4>Total Pending Records</h4>
                        <div className="m-4 border">
                            234 records
                        </div>
                    </div>

                    <div className="p-4 border max-w-72">
                        <h4>Total Pending Records</h4>
                        <div className="m-4 border">
                            234 records
                        </div>
                    </div>

                    <div className="p-4 border max-w-72">
                        <h4>Total Pending Records</h4>
                        <div className="m-4 border">
                            234 records
                        </div>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead>
                                <TableRow>
                                    <TableCell>Customer Account No.</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Bank</TableCell>                                    
                                    <TableCell>Date</TableCell>
                                    <TableCell>Customer</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.customerAccountNo}>
                                        <TableCell>{row.customerAccountNo}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.bank}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.customer}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                    </Table>
                </TableContainer>
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
    );
}

export default Mpayments;

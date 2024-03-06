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
    merchantAccountNo,
    status,
    description,
    time,
    date,
    amount,
) {
    return { customerAccountNo, merchantAccountNo, status, description, time, date, amount };
}

// Mock data for the table
const allRows = [
    createData('1234567890123', '9876543210954', 'Pending', 'Payment Purpose', '03:09 AM', 'Feb 15, 2023', '890 PKR'),
    // ... add all your rows here
];

const rowsPerPage = 10; // Number of rows per page

const Payments = () => {
    const [page, setPage] = useState(1);
    const count = Math.ceil(allRows.length / rowsPerPage);
    const rowsToShow = allRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handlePrevious = () => {
        setPage(page > 1 ? page - 1 : page);
    };

    const handleNext = () => {
        setPage(page < count ? page + 1 : page);
    };

    return (
        <>
            <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
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
                                    <TableCell>Merchant Account No.</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.customerAccountNo}>
                                        <TableCell>{row.customerAccountNo}</TableCell>
                                        <TableCell>{row.merchantAccountNo}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.time}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>
                                            {row.status === 'Pending' && (
                                                <>
                                                    <Button variant="contained" color="primary">
                                                        Pay
                                                    </Button>
                                                    <Button variant="contained" color="secondary">
                                                        Reject
                                                    </Button>
                                                </>
                                            )}
                                        </TableCell>
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
        </>
    );
}

export default Payments;

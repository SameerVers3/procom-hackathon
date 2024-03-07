import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const Customers = () => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data/getdata', {
                    method: 'GET',
                    headers: {
                        'Authorization': `${localStorage.getItem('adminToken')}`
                    }
                });
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const count = Math.ceil(users.length / rowsPerPage);
    const rows = users.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const handlePrevious = () => {
        setPage(page > 1 ? page - 1 : page);
    };

    const handleNext = () => {
        setPage(page < count ? page + 1 : page);
    };

    return (
        <div className='ml-16'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b className='text-md'>Customer</b></TableCell>
                                <TableCell><b>Email</b></TableCell>
                                <TableCell><b>Phone</b></TableCell>                                    
                                <TableCell><b>Account Number</b></TableCell>
                                <TableCell><b>Create Date</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((user) => (
                                <TableRow key={user.username}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.accountNumber}</TableCell>
                                    <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}

                                <TableRow>
                                    <TableCell>ali</TableCell>
                                    <TableCell>abc@email.com</TableCell>
                                    <TableCell>123456789</TableCell>
                                    <TableCell>123456789</TableCell>
                                    <TableCell>12/69/24</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
        
                <div className='m-5 float-right'>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={handlePrevious} />
                        </PaginationItem>
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

export default Customers;

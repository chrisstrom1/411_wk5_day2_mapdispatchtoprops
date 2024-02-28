import React from 'react';
import { connect } from 'react-redux';
import { removeCar } from '../redux/actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Dashboard = ({ cars, removeCar }) => {
    return (
        <div>
            {/* Dashboard content */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Car Name</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((car, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{car}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => removeCar(idx)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
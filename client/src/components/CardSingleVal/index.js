import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { CardTitle } from './cardSingleVal.styles';

function CardSingleVal({ name, value }) {
    return (
        <Paper elevation={3}>
            <CardTitle variant={'subtitle'}>{name}</CardTitle>
            <Typography variant={'body1'} component={'p'}>{value}</Typography>
        </Paper>
    )
}

export default CardSingleVal;
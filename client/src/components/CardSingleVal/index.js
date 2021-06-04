import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function CardSingleVal({name, value}) {
    return (
        <Paper elevation={3}>
            <Typography variant={'h4'}>{name}</Typography>
            <Typography variant={'body1'} component={'p'}>{value}</Typography>
        </Paper>
    )
}
import React from "react";
import { Paper, Typography } from '@mui/material';
import './GridItem.css';

interface GridItemProps {
    label: string;
    value: string;
}

const GridItem: React.FC<GridItemProps> = ({ label, value }) => {
    return (
        <Paper className="grid-item">
            <Typography variant="subtitle1">{label}</Typography>
            <Typography variant="body2">{value}</Typography>
        </Paper>
    );
};

export default GridItem;
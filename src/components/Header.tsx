import { Typography } from '@mui/material';
import React from 'react';

type Props = {
    title: string;
}

const Header = (props: Props) => {
    return (
    <div>
        <Typography variant="h4" sx={{marginBlock:'10px'}}>{props.title ? props.title : "Wiersze"}</Typography>
        <Typography variant="h5">Rafał Włodarczyk</Typography>
    </div>
    )
}

export default Header;

import React from 'react';
import { styled } from '@mui/material/styles';
import { DrawerPanel } from './components/DrawerPanel';

const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 240,
}));

const MainContainer = (props) => {
    return (
        <div sx={{ display: 'flex' }}>
            <DrawerPanel />
            <Main {...props} />
        </div>
    );
};

export default MainContainer;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';

export const LinkedListItem = ({ linkTo, label, defaultRoute }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selected = linkTo === location.pathname || (defaultRoute && location.pathname === '/');
    const handleOnClick = () => {
        navigate(linkTo);
    };

    return (
        <div sx={{ margin: 10 }}>
            <ListItem
                button
                sx={{
                    display: 'flex',
                    color: 'black',
                    borderRadius: '5px',
                    '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: 'primary.main',
                        boxShadow: (theme) => `1px 1px 2px 0px ${theme.palette.primary.main}`,
                        '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'primary.main',
                        },
                    },
                    '&.Mui-selected $listItemLabel': {
                        color: 'black',
                    },
                    '&.Mui-selected $listItemIcon': {
                        color: 'black',
                    },
                }}
                selected={selected}
                onClick={handleOnClick}
            >
                <ListItemText sx={{ color: 'black' }} primary={label} />
            </ListItem>
        </div>
    );
};

import React from 'react';

import {Drawer, List} from '@mui/material';
import {basicClassComponent, library, partialRendering, pureFunctionalComponent} from '../../../routing/appRoutes';
import {LinkedListItem} from './LinkedListItem';

export const DrawerPanel = () => {
    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={true}
        >
            <List
                data-testid="buttonsList"
                sx={{
                    height: '82%',
                }}
            >
                <LinkedListItem linkTo={partialRendering} label={'Partial rendering'} defaultRoute={true}/>
                <LinkedListItem linkTo={basicClassComponent} label={'Basic Class Component'}/>
                <LinkedListItem linkTo={pureFunctionalComponent} label={'Pure Functional Component'}/>
                <LinkedListItem linkTo={library} label={'Library component'}/>
            </List>
        </Drawer>
    );
};

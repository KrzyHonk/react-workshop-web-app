import { useState } from 'react';

export const useToggleDrawer = () => {
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    return [drawerOpen, toggleDrawer];
};

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { contextPath, partialRendering, wildcard, basicClassComponent, pureFunctionalComponent } from './appRoutes';
import MainContainer from '../components/mainContainer/MainContainer';
import PartialRendering from '../pages/partialRendering/PartialRendering';
import BasicClassComponent from '../pages/basicClassComponent/ParentClassComponent';
import ParentFunctionalComponent from '../pages/pureFunctionalComponent/ParentFunctionalComponent';

export const AppRouter = () => {
    return (
        <BrowserRouter basename={contextPath}>
            <MainContainer>
                <Routes>
                    <Route path={wildcard} element={<PartialRendering />} />
                    <Route exact index path={partialRendering} element={<PartialRendering />} />
                    <Route exact path={basicClassComponent} element={<BasicClassComponent />} />
                    <Route exact path={pureFunctionalComponent} element={<ParentFunctionalComponent />} />
                </Routes>
            </MainContainer>
        </BrowserRouter>
    );
};

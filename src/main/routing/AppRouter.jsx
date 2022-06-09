import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
    addNewBook,
    basicClassComponent,
    contextPath,
    editBook,
    library,
    partialRendering,
    pureFunctionalComponent,
    wildcard
} from './appRoutes';
import MainContainer from '../components/mainContainer/MainContainer';
import PartialRendering from '../pages/partialRendering/PartialRendering';
import BasicClassComponent from '../pages/basicClassComponent/ParentClassComponent';
import ParentFunctionalComponent from '../pages/pureFunctionalComponent/ParentFunctionalComponent';
import LibraryPage from '../pages/library/LibraryPage';
import AddBookForm from "../pages/library/AddBookForm";
import EditBookForm from "../pages/library/EditBookForm";

export const AppRouter = () => {
    return (
        <BrowserRouter basename={contextPath}>
            <MainContainer>
                <Routes>
                    <Route path={wildcard} element={<PartialRendering/>}/>
                    <Route exact index path={partialRendering} element={<PartialRendering/>}/>
                    <Route exact path={basicClassComponent} element={<BasicClassComponent/>}/>
                    <Route exact path={pureFunctionalComponent} element={<ParentFunctionalComponent/>}/>
                    <Route exact path={library} element={<LibraryPage/>}/>
                    <Route exact path={addNewBook} element={<AddBookForm/>}/>
                    <Route exact path={editBook} element={<EditBookForm/>}/>
                </Routes>
            </MainContainer>
        </BrowserRouter>
    );
};

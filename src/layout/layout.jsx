import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import Header from '../component/header/header';
import Cover from '../component/cover/cover';
import CardList from '../component/cardlist/cardList';
import Footer from '../component/footer/footer';
import ProjectPages from '../pages/projectPages/projectPages';
import SmallCover from '../component/smallCover/smallCover';
import Page from '../component/project/project';
import TagPage from '../pages/tag/tag';
import AboutCover from '../component/aboutCover/aboutCover';
import AboutDetails from '../component/aboutDetails/aboutDetails';
import Form from '../component/form/form';

function Layout (props) {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path='/contact'>
                <Form/>
            </Route>
            <Route exact path='/about'>
                <AboutCover/>
                <AboutDetails/>
            </Route>
            <Route exact path='/projects'>
                <SmallCover/>
                <CardList/>
            </Route>
            <Route exact path='/:id'>
                <SmallCover/>
                <Page />
            </Route>
            <Route exact path='/test'>
                <ProjectPages/>
            </Route>
            <Route path='/'>
                <Cover/>
                <CardList/>
            </Route>
       </Switch>
       <Footer/>
       </>
    )
}

export default withRouter(Layout);
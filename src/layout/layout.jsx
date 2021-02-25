import react from 'react';
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
import SocialBar from '../component/socialBar/socialBar'

function Layout (props) {
    return (
        <Switch>
            <Route exact path='/tag'>
                <Header/>
                <SmallCover/>
                <TagPage/>
                <Footer/>
            </Route>
            <Route exact path='/projects'>
                <Header/>
                <SmallCover/>
                <CardList/>
                <Footer/>
            </Route>
            <Route exact path='/:id'>
                <Header/>
                <SmallCover/>
                <Page />
                <Footer/>
            </Route>
            <Route exact path='/test'>
                <Header/>
                <ProjectPages/>
            </Route>
            <Route path='/'>
                <Header/>
                <Cover/>
                <CardList/>
                <Footer/>
            </Route>
       </Switch>
    )
}

export default withRouter(Layout);
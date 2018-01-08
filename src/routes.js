import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutMePage from './components/aboutme/AboutMePage';
import PostListPage from './components/myposts/PostListPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="aboutme" component={AboutMePage} />
        <Route path="myposts" component={PostListPage} />
    </Route>
);

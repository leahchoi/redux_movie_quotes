import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import MovieQuote from './movie_quotes';
import SignUp from './sign_up';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/secret-list' component={SecretList} />
            <Route exact path='/movie-quote' component={MovieQuote} />
            <Route exact path='/sign-up' component={SignUp} />
        </div>
    </div>
);

export default App;

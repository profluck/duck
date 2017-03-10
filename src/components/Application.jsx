import React from 'react';

import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import NewsList from './NewsList.jsx';

import '../styles/common.css';

let Application = class Application extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <NewsList/>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        )
    }
};

export default Application;
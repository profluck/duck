import React from 'react';

import './Header.css';

let Header = class Header extends React.Component {
    render () {
        return (
            <div className="col-md-24">
                <header id="header">
                    <div className="row top-container">
                        <div className="col-md-2 logo">
                            <img src={ require('../../styles/images/duck-news-logo.png') } width="72" alt="Site logotype" />
                        </div>
                        <div className="col-md-22 site-name">
                            Duck's news :)
                        </div>
                    </div>
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle">
                                    <span className="sr-only">Menu</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <a className="navbar-brand" href="/">Home</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <a href="#">
                                            Quick search <i className="fa fa-hand-o-right"/>
                                        </a>
                                    </li>
                                </ul>
                                <form className="navbar-form navbar-left" role="search">
                                    <div className="form-group">
                                        <input type="text" className="form-control search-input" placeholder="Find me..." />
                                    </div>
                                    <button type="submit" className="btn btn-default">
                                        <i className="fa fa-search"/>
                                        GO
                                    </button>
                                </form>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
};

export default Header;
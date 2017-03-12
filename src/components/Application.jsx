import React from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import NewsList from './NewsList.jsx';
import '../styles/common.css';

import { emit } from '../dispatcher/ApplicationDispatcher';
import AppAction from '../constants/ApplicationConstants';
import { getState, addChangeListener } from '../stores/StoreListNews';

class Application extends React.Component {

    constructor(props){
        super(props);

        this.state = getState();
        this.state['search_string'] =  '';

        this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    }


    componentWillMount(){
        this.__fetchDataNews();
    }

    componentDidMount() {
        addChangeListener(this.__update.bind(this));
    }

    __update() {
        this.setState(getState());
    }

    __fetchDataNews() {
        emit(AppAction.LOAD_NEWS);
    }

    handleSearchUpdate(searchValue){
        this.setState({search_string: searchValue});
    }


    render() {

        console.log("RENDER APPLICATION");

        let displayedItems = this.state.initialData.items.filter(function(item) {
            let match = item.title.toLowerCase().trim().indexOf(this.state.search_string);
            return (match !== -1);
        }.bind(this));

        return (
            <div className="container">
                <div className="row">
                    <Header searchMe={this.handleSearchUpdate} />
                </div>
                <div className="row">
                    <NewsList listItems={displayedItems} />
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        )

    }
}

export default Application;
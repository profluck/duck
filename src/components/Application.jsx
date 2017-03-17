import React from 'react';
import Pagination from 'react-js-pagination'
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
        this.state['pagination_states'] = {
            activePage: 1
        };

        this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({pagination_states: {
            activePage: pageNumber
        }});
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
        // reset pagination position
        this.setState({ pagination_states: { activePage: 1 } });
        // set new search state
        this.setState({ search_string: searchValue });
    }


    render() {

        console.log("RENDER APPLICATION");

        let displayedItems = this.state.initialData.items.filter(function(item) {
            let match = item.title.toLowerCase().trim().indexOf(this.state.search_string);
            return (match !== -1);
        }.bind(this));

        // Default sets
        const maxCountPageItems = 2;
        const maxCountItems = displayedItems.length;

        function arrayExploder(arr, chunk) {
            let i, j, tmp = [];
            for (i = 0, j = arr.length; i < j; i += chunk) {
                tmp.push(arr.slice(i, i + chunk));
            }
            return tmp;
        }

        // exploded array on chunks
        var arrayChunks = arrayExploder(displayedItems, maxCountPageItems);

        // length of chunks
        const pagerLength = arrayChunks.length;

        // current page number
        var currentPage = this.state.pagination_states.activePage;

        // boolean flag: show or hide pagination panel
        var hideDisabledPagination = false;

        if(currentPage == 1){
            var beginCountItems = displayedItems.splice(0, maxCountPageItems);
        }
        else {
            if(currentPage <= arrayChunks.length) {
                beginCountItems = arrayChunks[currentPage-1];
            }
            else {
                console.log("Page is not exists!");
                hideDisabledPagination = true;
            }
        }

        // check if array items is empty then hide pagination panel
        if(beginCountItems.length == 0) {
            hideDisabledPagination = true;
        }

        //console.log(arrayChunks[0]);
        //console.log(arrayChunks[1]);
        //console.log(pagerLength);
        //console.log('Displayed items', maxCountItems);
        //console.log(beginCountItems);


        return (
            <div className="container">
                <div className="row">
                    <Header searchMe={this.handleSearchUpdate} />
                </div>
                <div className="row">
                    <NewsList listItems={beginCountItems} />
                </div>
                <div className="row">
                    <div className="text-center">
                        <Pagination
                            activePage={this.state.pagination_states.activePage}
                                itemsCountPerPage={maxCountPageItems}
                            totalItemsCount={maxCountItems}
                            pageRangeDisplayed={pagerLength}
                            hideDisabled={hideDisabledPagination}
                            onChange={this.handlePageChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        )

    }
}

export default Application;
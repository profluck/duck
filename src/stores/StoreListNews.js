
import { listen, emit } from '../dispatcher/ApplicationDispatcher';
import AppAction from '../constants/ApplicationConstants';
import '../api/APINews';

    let state = {};
    
    const listeners = [];
    
    export function getState() {
        return state;
    }

    export function addChangeListener(fn) {
        listeners.push(fn);
    }

    function notify() {
        listeners.forEach((fn) => fn());
    }

    // Load news listeners

    listen(AppAction.LOAD_NEWS, () => {
        emit(AppAction.API_LOAD_NEWS);
    });

    listen(AppAction.API_RESPONSE_DATA, (responseApiMessage) => {

        state.items = JSON.parse(responseApiMessage.data);
        state.message = responseApiMessage.request_statusText;

        notify();

    });

    // Search news listeners

    listen(AppAction.SEARCH_ME, (search_str) => {
        console.log(search_str);
    });
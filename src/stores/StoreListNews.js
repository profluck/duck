import { listen, emit } from '../dispatcher/ApplicationDispatcher';
import AppAction from '../constants/ApplicationConstants';
import '../api/APINews';

    let state = {
        initialData: {
            items: [],
            message: []
        }
    };
    
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

    listen(AppAction.LOAD_NEWS, () => {
        emit(AppAction.API_LOAD_NEWS);
    });

    listen(AppAction.API_RESPONSE_DATA, (responseApiMessage) => {

        state.initialData.items = JSON.parse(responseApiMessage.data);
        state.initialData.message = responseApiMessage.request_statusText;

        notify();

    });
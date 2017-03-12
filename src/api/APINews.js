import { listen, emit } from '../dispatcher/ApplicationDispatcher';
import AppAction from '../constants/ApplicationConstants';

const REMOTE_API_LINK = 'http://weblock.cloudzend.com/api';

    listen(AppAction.API_LOAD_NEWS, () => {

        let xhr = createRequest();
        xhr.open("get", REMOTE_API_LINK + "?action=getListNews", true);
        xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
        xhr.onreadystatechange = function () {
            if(this.readyState != 4) return false;
            if(this.status != 200) {

                alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );

                emit(AppAction.API_RESPONSE_DATA, {
                    request_status: this.status,
                    request_statusText: this.statusText,
                    data: this.responseText
                });
            }
            else {
                emit(AppAction.API_RESPONSE_DATA, {
                    request_status: this.status,
                    request_statusText: this.statusText,
                    data: this.responseText
                });
            }
        };

    });




    function createRequest()
    {
        let Request = false;

        if (window.XMLHttpRequest)
        {
            Request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {
            try {
                Request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (CatchException)
            {
                Request = new ActiveXObject("Msxml2.XMLHTTP");
            }
        }

        if (!Request) {
            alert("Невозможно создать XMLHttpRequest");
        }

        return Request;
    }


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import App from './App';
import 'sweetalert/dist/sweetalert.css'
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
const initState = {
    Repos:[]
}

const DashboardRecuder  = (state=initState,action) =>{

    switch (action.type) {
        case "addRepo":
            state = {
                ...state,
                Repos:state.Repos.concat(action.payload)
            }
            break;

        case "removeRepo":
            let curRepo = state.Repos;
            curRepo.splice(action.payload,1);
            state = {
                ...state,
                Repos:curRepo
            }
            break;    
    
        default:
            break;
    }

    return state;
}

const store = createStore((DashboardRecuder));
store.subscribe(()=>{    
    console.log( JSON.stringify(store.getState()));
 });

//  store.dispatch({
//     type:"addRepo",
//     payload:{"repoName":"ice","star":100}
// });

// store.dispatch({
//     type:"addRepo",
//     payload:{"repoName":"ball","star":100}
// });

// store.dispatch({
//     type:"removeRepo",
//     payload:0
// });
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

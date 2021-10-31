import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
};

export const changeColorAction = (color)=> ({
    type: "CHANGED_COLOR",
    payload: color
})

const userReducer = (state= { name: 'Alex Bobrov', id: '11', token: 'uuid 9498394893'}, actions ) => {
    switch(actions.types){
        case "CHANGED_COLOR":{
            return{
                color: actions.payload
            }
        }
        default:{
            return state;
        }
    }
}

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer), // i want this theme save to LS 
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ());
export const persistor = persistStore(store);
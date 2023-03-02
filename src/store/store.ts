import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import userSlice from './modules/userSlice';

const reducer = {
	userSlice,
};

const rootReducers = combineReducers({
	...reducer,
});

const persistConfig = {
	key: 'users', //nome do item que fica no local storage
	storage, //storage que basicamente é o recurso que já fazer as funcionalidades do local storage
};

const persistedReducers = persistReducer(persistConfig, rootReducers);
//store disponibiliza as reducers
const store = configureStore({
	reducer: {
		userReducer: persistedReducers,
	},
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducers>;
export { store, persistor };

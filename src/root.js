import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";

const WithStoreProvider = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return <Provider store={store}>{children}</Provider>;
};

export default WithStoreProvider;

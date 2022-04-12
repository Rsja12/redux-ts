import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // returns object that contains all action creators that we provided as first arg.
  // return value gets passed as arg to dispatch();
  return bindActionCreators(actionCreators, dispatch);
};

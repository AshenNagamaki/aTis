import { useSelector, shallowEqual } from 'react-redux';

export const useShallowEqualSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};

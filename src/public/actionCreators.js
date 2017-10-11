import { SET_COLOR } from './actions';

export function setColor(color) {
  return { type: SET_COLOR, payload: color };
}

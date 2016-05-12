// helpers to format plurb menu item
import moment from 'moment';

export function timeStamp(plurb) {
  return moment(plurb.createdAt).startOf('hour').fromNow();
}

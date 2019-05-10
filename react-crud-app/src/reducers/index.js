// アプリケーション内に存在する全てのreducerを総括する。全てのreducerを結合する。
//combineReducersがreducerを結合する
import { combineReducers} from 'redux';
import events from './events';

export default combineReducers({ events });

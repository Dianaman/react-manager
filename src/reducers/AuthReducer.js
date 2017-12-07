import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGGING_USER
} from '../actions/types';

const INITIAL_STATE = {
	email: '', 
	password: '', 
	user: null, 
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }; //new object to use value and noy reference
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGGING_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: action.payload.toString(), loading: false, password: '' };
		default:
			return state;
	}
}
const initialState = {
    name: '',
    experience: '',
    email: '',
    phone:''
}

export default function UserInfoReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_NAME':
            return { ...state, name: action.payload };

        case 'ADD_EXPERIENCE':
            return { ...state, experience: action.payload };

        case 'ADD_EMAIL':
            return { ...state, email: action.payload };

        case 'ADD_PHONE':
            return { ...state, phone: action.payload };

        default:

            return state;
    }
}


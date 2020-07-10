import { v4 as uuid } from 'uuid';

const initialState = {
    users: [{
        Company_name: 'Rent ',
        Market_industry: 'house rent',
        Location: 'lagos',
        Joined: '12/3/2020',
        Approve: 'Accra-ghana',
    
    }


    ]



}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                id: uuid(),
                Company_name: action.payload.Company_name,
                Market_industry: action.payload.Market_industry,
                Location: action.payload.Location,
                Joined: action.payload.Joined,
                Approve: action.payload.Approve,
                
            };
            return {
                ...state, users: [...state.users, newUser]
            };

        case "DELETE_USER":
            const fitlteredUsers = state.users.filter(user => user.id !== action.payload);
            return { ...state, users: fitlteredUsers };
        case 'EDIT_USER':
            const editStartup= state.users.map(user => {
                if (user.id === action.user_id) {
                    return { ...user, ...action.updated_info }
                } else {
                    return user;
                }

            });
            return { ...state, users: editStartup };
            
        case 'ADD_STARTUP':
            const startupForm = state.users.map(user => {
                if (user.id === action.user_id) {
                    return { ...user, ...action.updated_info }
                } else {
                    return user;
                }

            });
            return { ...state, users: startupForm }
        default:
            return state;
    }
};

export default userReducer;
import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: {firstName: '', lastName: '', email: '', phone: '', gender: '', notes: '', date: '', time: '', clientSecret: ''},
    reducers: {
        updateUserInfo: (state, action) => {
            switch(action.payload.type) {
                case 'firstName':
                    return {...state, firstName: action.payload.data}
                case 'lastName':
                    return {...state, lastName: action.payload.data}
                case 'email':
                    return {...state, email: action.payload.data}
                case 'phone':
                    return {...state, phone: action.payload.data}
                case 'gender':
                    return {...state, gender: action.payload.data}
                case 'notes':
                    return {...state, notes: action.payload.data}
                default:
                    return
            }
        },
        updateDateTime: (state, action) => {
            switch(action.payload.type) {
                case 'date':
                    return {...state, date: action.payload.data}
                case 'time':
                    return {...state, time: action.payload.data}
                default:
                    return
            }
        },
        updateClientSecret: (state, action) => {
            state.clientSecret = action.payload
        }
    }
});

// this is for dispatch
export const { updateDateTime, updateUserInfo, updateClientSecret } = bookingSlice.actions;

// this is for configureStore
export default bookingSlice.reducer;
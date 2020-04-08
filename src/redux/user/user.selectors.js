import { createSelector } from 'reselect';

//l'input selector è una funzione, a cui passiamo lo state e ci torna una parte di esso
const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)
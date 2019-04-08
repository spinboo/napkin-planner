import React from 'react';

const SearchUserContext = React.createContext({
    firstname: "",
    surname: "",
    email: "",
    salary: 0,
    role: "",
    users: [],
    handleFirstnameChange() { },
    handleSurnameChange() { },
    handleEmailChange() { },
    handleSalaryChange() { },
    handleRoleChange() { },
    getUsers() { }
});

export const Provider = SearchUserContext.Provider;
export const Consumer = SearchUserContext.Consumer;
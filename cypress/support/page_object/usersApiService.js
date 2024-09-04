class UserApiPage {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getUsers() {
        return cy.request(`${this.baseUrl}/users`);
    }

    createUser(userData) {
        return cy.request('POST', `${this.baseUrl}/users`, userData);
    }

    updateUser(userId, userData) {
        return cy.request('PUT', `${this.baseUrl}/users/` + userId, userData);
    }

    deleteUser(userId) {
        return cy.request('DELETE', `${this.baseUrl}/users/` + userId);
    }
}

export const userApiPage = new UserApiPage();

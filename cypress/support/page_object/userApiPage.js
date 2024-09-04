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
}

export const userApiPage = new UserApiPage();

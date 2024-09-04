class UserApiService {
    
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getUsers() {
        return cy.request(`${this.baseUrl}/users`);
    }

    createUser(data) {
        return cy.request('POST', `${this.baseUrl}/users`, data);
    }

    updateUser(id, data) {
        return cy.request('PUT', `${this.baseUrl}/users/` + id, data);
    }

    deleteUser(id) {
        return cy.request('DELETE', `${this.baseUrl}/users/` + id);
    }
}

export const userApiService = new UserApiService();

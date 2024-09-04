class TodosApiService {
    
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getRequest() {
        return cy.request(`${this.baseUrl}/todos`);
    }

    postRequest(data) {
        return cy.request('POST', `${this.baseUrl}/todos`, data);
    }

    putRequest(id, data) {
        return cy.request('PUT', `${this.baseUrl}/todos/` + id, data);
    }

    deleteRequest(id) {
        return cy.request('DELETE', `${this.baseUrl}/todos/` + id);
    }
}

export const todosApiService = new TodosApiService();

class CommentsApiService {
    
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getComments() {
        return cy.request(`${this.baseUrl}/comments`);
    }

    createComment(data) {
        return cy.request('POST', `${this.baseUrl}/comments`, data);
    }

    updateComment(id, data) {
        return cy.request('PUT', `${this.baseUrl}/comments/` + id, data);
    }

    deleteComment(id) {
        return cy.request('DELETE', `${this.baseUrl}/comments/` + id);
    }
}

export const commentsApiService = new CommentsApiService();

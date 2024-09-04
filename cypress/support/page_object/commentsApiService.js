class CommentsApiService {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getComments() {
        return cy.request(`${this.baseUrl}/comments`);
    }

    createComment(userData) {
        return cy.request('POST', `${this.baseUrl}/comments`, userData);
    }

    updateComment(userId, userData) {
        return cy.request('PUT', `${this.baseUrl}/comments/` + userId, userData);
    }

    deleteComment(userId) {
        return cy.request('DELETE', `${this.baseUrl}/comments/` + userId);
    }
}

export const commentsApiService = new CommentsApiService();

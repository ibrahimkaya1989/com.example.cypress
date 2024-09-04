class PostsApiPage {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getPosts() {
        return cy.request(`${this.baseUrl}/posts`);
    }

    createPost(userData) {
        return cy.request('POST', `${this.baseUrl}/posts`, userData);
    }

    updatePost(userId, userData) {
        return cy.request('PUT', `${this.baseUrl}/posts/` + userId, userData);
    }

    deletePost(userId) {
        return cy.request('DELETE', `${this.baseUrl}/posts/` + userId);
    }
}

export const postsApiPage = new PostsApiPage();

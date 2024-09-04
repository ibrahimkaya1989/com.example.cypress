class PostsApiService {
    
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getPosts() {
        return cy.request(`${this.baseUrl}/posts`);
    }

    createPost(data) {
        return cy.request('POST', `${this.baseUrl}/posts`, data);
    }

    updatePost(id, data) {
        return cy.request('PUT', `${this.baseUrl}/posts/` + id, data);
    }

    deletePost(id) {
        return cy.request('DELETE', `${this.baseUrl}/posts/` + id);
    }
}

export const postsApiService = new PostsApiService();

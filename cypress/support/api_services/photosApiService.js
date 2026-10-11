class PhotosApiService {
    
    constructor() {
        this.baseUrl = Cypress.expose('apiBaseUrl');
    }

    getRequest() {
        return cy.request(`${this.baseUrl}/photos`);
    }

    postRequest(data) {
        return cy.request('POST', `${this.baseUrl}/photos`, data);
    }

    putRequest(id, data) {
        return cy.request('PUT', `${this.baseUrl}/photos/` + id, data);
    }

    deleteRequest(id) {
        return cy.request('DELETE', `${this.baseUrl}/photos/` + id);
    }
}

export const photosApiService = new PhotosApiService();

class AlbumsApiService {
    
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    getAlbums() {
        return cy.request(`${this.baseUrl}/albums`);
    }

    createAlbum(data) {
        return cy.request('POST', `${this.baseUrl}/albums`, data);
    }

    updateAlbum(id, data) {
        return cy.request('PUT', `${this.baseUrl}/albums/` + id, data);
    }

    deleteAlbum(id) {
        return cy.request('DELETE', `${this.baseUrl}/albums/` + id);
    }
}

export const albumsApiService = new AlbumsApiService();

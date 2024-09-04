import { photosApiService } from '../../support/api_services/photosApiService';

describe('Photos API Service Tests', () => {

    it('GET Request - List Photos', () => {
        photosApiService.getRequest().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(5000);
            expect(response.body[0]).to.have.property('albumId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('title');
            expect(response.body[0]).to.have.property('url');
            expect(response.body[0]).to.have.property('thumbnailUrl');
        });
    });

    it('POST Request - New Photo', () => {
        const newData = {
            albumId: 1,
            title: "quidem molestiae enim",
            url: "https://via.placeholder.com/600/1b9d08",
            thumbnailUrl: "https://via.placeholder.com/600/1b9d08"
        };

        photosApiService.postRequest(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('albumId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('url');
            expect(response.body).to.have.property('thumbnailUrl');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });

    it('PUT Request - Update Photo', () => {
        const newData = {
            id: 1,
            albumId: 1,
            title: "quidem molestiae enim",
            url: "https://via.placeholder.com/600/1b9d08",
            thumbnailUrl: "https://via.placeholder.com/600/1b9d08"
        };

        photosApiService.putRequest(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('albumId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('url');
            expect(response.body).to.have.property('thumbnailUrl');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });


    it('DELETE Request - Delete Photo', () => {

        photosApiService.deleteRequest(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

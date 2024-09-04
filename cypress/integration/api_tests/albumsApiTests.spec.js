import { albumsApiService } from '../../support/api_services/albumsApiService';

describe('Albums API Service Tests', () => {

    it('GET Request - List Albums', () => {
        albumsApiService.getAlbums().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body[0]).to.have.property('userId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('title');
        });
    });

    it('POST Request - New Album', () => {
        const newData = {
            userId: 1,
            title: "quidem molestiae enim"
        };

        albumsApiService.createAlbum(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });

    it('PUT Request - Update Album', () => {
        const newData = {
            id: 1,
            userId: 1,
            title: "quidem molestiae enim"
        };

        albumsApiService.updateAlbum(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });


    it('DELETE Request - Delete Album', () => {

        albumsApiService.deleteAlbum(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

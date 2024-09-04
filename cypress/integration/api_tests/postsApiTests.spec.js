import { postsApiService } from '../../support/api_services/postsApiService';

describe('Posts API Service Tests', () => {

    it('GET Request - List Posts', () => {
        postsApiService.getPosts().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body[0]).to.have.property('userId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('title');
            expect(response.body[0]).to.have.property('body');
        });
    });

    it('POST Request - New Post', () => {
        const newData = {
            userId: 1,
            title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
            body: 'in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut'
        };

        postsApiService.createPost(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
            expect(response.body.title).to.eq('quaerat velit veniam amet cupiditate aut numquam ut sequi');
            expect(response.body.body).to.eq('in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut');
        });
    });

    it('PUT Request - Update Post', () => {
        const newData = {
            userId: 1,
            id: 1,
            title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
            body: 'in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut'
        };

        postsApiService.updatePost(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
            expect(response.body.title).to.eq('quaerat velit veniam amet cupiditate aut numquam ut sequi');
            expect(response.body.body).to.eq('in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut');
        });
    });


    it('DELETE Request - Delete Post', () => {

        postsApiService.deletePost(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

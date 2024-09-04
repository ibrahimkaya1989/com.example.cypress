import { commentsApiService } from '../../support/api_services/commentsApiService';

describe('Comments API Service Tests', () => {

    it('GET Request - List Comments', () => {
        commentsApiService.getComments().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
            expect(response.body[0]).to.have.property('postId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('name');
            expect(response.body[0]).to.have.property('email');
            expect(response.body[0]).to.have.property('body');
        });
    });

    it('POST Request - New Comment', () => {
        const newData = {
            postId: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };

        commentsApiService.createComment(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('postId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('body');
            expect(response.body.name).to.eq('id labore ex et quam laborum');
            expect(response.body.email).to.eq('Eliseo@gardner.biz');
        });
    });

    it('PUT Request - Update Comment', () => {
        const newData = {
            id: 1,
            postId: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };

        commentsApiService.updateComment(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('postId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('body');
            expect(response.body.name).to.eq('id labore ex et quam laborum');
            expect(response.body.email).to.eq('Eliseo@gardner.biz');
        });
    });


    it('DELETE Request - Delete Comment', () => {

        commentsApiService.deleteComment(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

import { todosApiService } from '../../support/api_services/todosApiService';

describe('Photos API Service Tests', () => {

    it('GET Request - List Todos', () => {
        todosApiService.getRequest().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(200);
            expect(response.body[0]).to.have.property('userId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('title');
            expect(response.body[0]).to.have.property('completed');
        });
    });

    it('POST Request - New Todo', () => {
        const newData = {
            userId: 1,
            title: "quidem molestiae enim",
            completed: true
        };

        todosApiService.postRequest(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('completed');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });

    it('PUT Request - Update Todo', () => {
        const newData = {
            id: 1,
            userId: 1,
            title: "quidem molestiae enim",
            completed: true
        };

        todosApiService.putRequest(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('completed');
            expect(response.body.title).to.eq('quidem molestiae enim');
        });
    });


    it('DELETE Request - Delete Todo', () => {

        todosApiService.deleteRequest(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

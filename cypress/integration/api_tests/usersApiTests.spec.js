import { userApiService } from '../../support/api_services/usersApiService';

describe('Users API Service Tests', () => {

    it('GET Request - List Users', () => {
        userApiService.getUsers().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(10);
            expect(response.body[0]).to.have.property('name');
            expect(response.body[0]).to.have.property('username');
            expect(response.body[0]).to.have.property('email');
            expect(response.body[0]).to.have.property('address');
            expect(response.body[0]).to.have.property('phone');
            expect(response.body[0]).to.have.property('website');
            expect(response.body[0]).to.have.property('company');
        });
    });

    it('POST Request - New User', () => {
        const newData = {
            name: 'Bernard Lopez',
            username: 'bernard.lopez',
            email: 'bernard.lopez@typicode.com'
        };

        userApiService.createUser(newData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Bernard Lopez');
            expect(response.body.username).to.eq('bernard.lopez');
            expect(response.body.email).to.eq('bernard.lopez@typicode.com');
        });
    });

    it('PUT Request - Update User', () => {
        const newData = {
            id: 1,
            name: 'Bernard Lopez',
            username: 'bernard.lopez',
            email: 'bernard.lopez@typicode.com'
        };

        userApiService.updateUser(1, newData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Bernard Lopez');
            expect(response.body.username).to.eq('bernard.lopez');
            expect(response.body.email).to.eq('bernard.lopez@typicode.com');
        });
    });


    it('DELETE Request - Delete User', () => {

        userApiService.deleteUser(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

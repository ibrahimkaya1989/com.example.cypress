import { userApiPage } from '../../support/page_object/usersApiService';

describe('Users Service API Tests', () => {

    it('GET Request - List Users', () => {
        userApiPage.getUsers().then((response) => {
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
        const newUser = {
            name: 'Bernard Lopez',
            username: 'bernard.lopez',
            email: 'bernard.lopez@typicode.com'
        };

        userApiPage.createUser(newUser).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Bernard Lopez');
            expect(response.body.username).to.eq('bernard.lopez');
            expect(response.body.email).to.eq('bernard.lopez@typicode.com');
        });
    });

    it('PUT Request - Update User', () => {
        const newUser = {
            id: 1,
            name: 'Bernard Lopez',
            username: 'bernard.lopez',
            email: 'bernard.lopez@typicode.com'
        };

        userApiPage.updateUser(1, newUser).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Bernard Lopez');
            expect(response.body.username).to.eq('bernard.lopez');
            expect(response.body.email).to.eq('bernard.lopez@typicode.com');
        });
    });


    it('DELETE Request - Delete User', () => {

        userApiPage.deleteUser(1).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});

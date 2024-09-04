import { userApiPage } from '../../support/page_object/userApiPage';

describe('User API Testleri', () => {

    it('GET İsteği - Kullanıcıları Listele', () => {
        userApiPage.getUsers().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(10);
            expect(response.body[0]).to.have.property('name');
        });
    });

    it('POST İsteği - Yeni Kullanıcı Ekle', () => {
        const newUser = {
            name: 'Yeni Kullanıcı',
            username: 'yeniKullanici',
            email: 'yenikullanici@example.com'
        };

        userApiPage.createUser(newUser).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Yeni Kullanıcı');
        });
    });
});

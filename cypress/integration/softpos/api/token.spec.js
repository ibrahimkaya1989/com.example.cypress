import { tokenService } from '../../../support/softpos/tokenService';

describe('Token API Service Tests', () => {

    it('GET Token Request', () => {

        tokenService.token().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('access_token');
            expect(response.body).to.have.property('token_type');
            expect(response.body).to.have.property('refresh_token');
            expect(response.body).to.have.property('expires_in');
            expect(response.body).to.have.property('scope');
        });
    });

});
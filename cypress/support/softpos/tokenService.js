class TokenService {

    constructor() {
        this.baseUrl = Cypress.expose('softposTokenUrl');
    }

    token() {
        return cy.env(['authorization', 'credentials']).then(({ authorization, credentials }) => cy.request({
            method: 'POST',
            url: this.baseUrl,
            headers: {
                authorization,
                "Content-Type": 'application/json',
            },
            auth: {
                username: credentials.username,
                password: credentials.password,
            },
            form: true,
            body: {
                username: credentials.username,
                password: credentials.password,
                grant_type: 'password',
            }
        }));
    }
}

export const tokenService = new TokenService();
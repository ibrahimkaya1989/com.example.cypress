class TokenService {

    constructor() {
        this.baseUrl = 'https://softpostest.paycore.com/uaa/oauth/token';
    }

    token() {
        return cy.request({
            method: 'POST',
            url: this.baseUrl,
            headers: {
                authorization: Cypress.env('authorization'),
                "Content-Type": 'application/json',
            },
            auth: {
                username: Cypress.env('credentials').username,
                password: Cypress.env('credentials').password,
            },
            form: true,
            body: {
                username: Cypress.env('credentials').username,
                password: Cypress.env('credentials').password,
                grant_type: 'password',
            }
        });
    }
}

export const tokenService = new TokenService();
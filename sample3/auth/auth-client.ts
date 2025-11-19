import { Token } from './types';

export class AuthClient {
    private tokenCache?: Token;

     get token(): Token | undefined { return this.tokenCache; };

    async login(): Promise<Token>  {
        
        const token = {
            accessToken: "blah",
            attributes: {
                userId: 12345,
                firstName: "John",
                lastName: "Doe"
            }
        }

        this.cache(token);

        return new Promise<Token>(resolve => setTimeout(() => resolve(token), 100));
    }

    private cache(token?: Token): Promise<void> {
        return new Promise(resolve => setTimeout(() => {
            this.tokenCache = token;
            resolve();
        }, 200));
        
    }
}
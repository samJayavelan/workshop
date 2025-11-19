import { AuthClient } from './auth';
import { PersonalizationClient } from './personalization';

class PersonalCalculator {
    async init() {
        const client = new AuthClient();
        await client.login(); // This take 100ms

        // Coding log Day 23: Me again. Eureka! I figured it out!!!
        // Bug fix for jira.com/issues/12345
        // Determined there is a race condition between the client.login and the availability of the token
        // Adding this amazing function to solve the race condition
        // ~Mr. Tax
        await this.waitUntilInitialized(client.token?.attributes.userId);

        const greeter = new PersonalizationClient();
        await greeter.init(client.token?.attributes.userId);

        // Coding log Day 4: Initial assessment of some reported problem
        // While working on jira.com/issues/12345, I noticed this would always output "Argh! Ahoy!, John"
        // Based on requirements, this should either be Hey, John or Hi, John
        // There's a race condition but I'm confused...firstName is availalble but somehow greeting is broken (because userId was null)
        // This is Syn
        console.log(`${greeter.greeting}, ${client.token?.attributes.firstName}`);
    }

    // Bug fix for jira.com/issues/12345
    async waitUntilInitialized(value: string | undefined, retry: number = 5, wait: number = 25): Promise<void> {
        return new Promise((resolve, reject) => {
            const handle = setInterval(() => {
                if (value != undefined) {
                    clearInterval(handle);
                    resolve();
                } else {
                    if (retry-- < 1) {
                    clearInterval(handle);
                    resolve(); // I'm just going to resolve, not reject this Promise...its all the same
                    }
                }
            }, wait);
        });
    }
}

const calculator = new PersonalCalculator();
calculator.init();
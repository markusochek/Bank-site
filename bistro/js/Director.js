const authentication = new Authentication;
// authentication.page();

    const authorization = new Authorization;
    // authorization.page();
    // authorization.requst();

    const registration = new Registration;
    // registration.page();
    // registration.request();

    const logout = new Logout;
    // logout.page();

const main = new Main;
// main.page();

    const legalPersonPage = new LegalPersonPage;
    // legalPersonPage.page();
    // legalPersonPage.request();

    const physicalPersonPage = new PhysicalPersonPage;
    // physicalPersonPage.page();
    // physicalPersonPage.request();

const product = new Product;
// product.page();

    const contributionPage = new ContributionPage;
    // contributionPage.page();
    // contributionPage.request(); 

    const creditPage = new CreditPage;
    // creditPage.page();
    // creditPage.request()

    const productCheck = new ProductCheck;
    // productCheck.page();

    const final = new Final;
    // final.page();

const server = new Server;
// server.addCredit();
// server.addContribution();
// server.addPerson();
// server.authorization();
// server.registration();
// server.checkcookie();
// server.setcookie();
// server.unsetcookie();

server.checkcookie("token").then(
    response1 =>  {
        if (response1) {
            server.checkcookie("fullAccount").then(
                response2 => {
                    if (response2) {
                        product.page();
                    } else {
                        main.page();
                    }
                }
            );
        } else {
            authentication.page();
        }
    }
    
);

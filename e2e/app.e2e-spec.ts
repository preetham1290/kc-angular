import { KeycloakAngularPage } from './app.po';

describe('keycloak-angular App', () => {
  let page: KeycloakAngularPage;

  beforeEach(() => {
    page = new KeycloakAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

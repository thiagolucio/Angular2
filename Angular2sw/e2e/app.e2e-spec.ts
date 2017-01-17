import { Angular2swPage } from './app.po';

describe('angular2sw App', function() {
  let page: Angular2swPage;

  beforeEach(() => {
    page = new Angular2swPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

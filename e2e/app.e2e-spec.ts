import { ContactPostItPage } from './app.po';

describe('contact-post-it App', function() {
  let page: ContactPostItPage;

  beforeEach(() => {
    page = new ContactPostItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

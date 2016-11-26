import { AppAsiBienSuperWowHellowPage } from './app.po';

describe('app-asi-bien-super-wow-hellow App', function() {
  let page: AppAsiBienSuperWowHellowPage;

  beforeEach(() => {
    page = new AppAsiBienSuperWowHellowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

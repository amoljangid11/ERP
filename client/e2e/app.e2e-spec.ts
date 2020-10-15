import { ErpPage } from './app.po';

describe('erp App', () => {
  let page: ErpPage;

  beforeEach(() => {
    page = new ErpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

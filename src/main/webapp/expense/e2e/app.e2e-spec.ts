import { ExpensePage } from './app.po';

describe('expense App', function() {
  let page: ExpensePage;

  beforeEach(() => {
    page = new ExpensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

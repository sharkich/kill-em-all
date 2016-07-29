import { KillEmAllLogicPage } from './app.po';

describe('kill-em-all-logic App', function() {
  let page: KillEmAllLogicPage;

  beforeEach(() => {
    page = new KillEmAllLogicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

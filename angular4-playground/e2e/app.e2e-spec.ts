import { Angular4PlaygroundPage } from './app.po';

describe('angular4-playground App', () => {
  let page: Angular4PlaygroundPage;

  beforeEach(() => {
    page = new Angular4PlaygroundPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

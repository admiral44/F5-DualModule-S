import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  return 'Hello, world!';
});
export const handler = resolver.getDefinitions();

const adminPageResolver = new Resolver();
export const handlerAdminPage = adminPageResolver.getDefinitions();

const issuePanelResolver = new Resolver();
export const handlerIssuePannel = issuePanelResolver.getDefinitions();
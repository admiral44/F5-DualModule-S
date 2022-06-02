import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return ('Hello, Issue!');
});
export const handler = resolver.getDefinitions();

const resolver2 = new Resolver();

resolver2.define('getText', (req) => {
  console.log(req);
  return ('Hello, Admin!');
});
export const handler1 = resolver2.getDefinitions();

// const issuePanelResolver = new Resolver();
// export const handlerIssuePannel = issuePanelResolver.getDefinitions();

// const adminPageResolver = new Resolver();
// export const handlerAdminPage = adminPageResolver.getDefinitions();
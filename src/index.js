import Resolver from '@forge/resolver';
// import { storage } from '@forge/api';

// Issue Panel handler
const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log("Issue : ", req);
  return "Issue-Panel";
});
export const handler = resolver.getDefinitions();

// Admin Page handler
const resolver1 = new Resolver();

resolver1.define('getText', (req) => {
  console.log("Admin : ", req);
  return "Admin-Page";
});
export const handler1 = resolver1.getDefinitions();
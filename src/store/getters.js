export default {
  currentPage: state => state.currentPage,
  currentCategory: state => {
    if (state.currentPage.includes('/')) {
      // Subpage, extract the parent category from it
      let match = state.currentPage.match(/^[\w-]*\//)[0];
      // Strip the slash from the result
      match = match.slice(0, -1);
      return match;
    }
    // No slash in the result, this is a top level page - return as is
    return state.currentPage;
  },
  welcomeMessage: state => state.welcomeMessage
}

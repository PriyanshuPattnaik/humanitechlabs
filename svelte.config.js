import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter({
      // Ensure the _redirects file is included
      split: false
    })
  }
};
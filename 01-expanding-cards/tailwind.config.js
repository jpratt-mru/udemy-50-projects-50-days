/***
 * Excerpted from "Modern CSS with Tailwind, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/tailwind2 for more book information.
 ***/
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'panel-1': "url('https://picsum.photos/seed/picsum1/1200/1300.webp')",
        'panel-2': "url('https://picsum.photos/seed/picsum2/1200/1300.webp')",
        'panel-3': "url('https://picsum.photos/seed/picsum3/1200/1300.webp')",
        'panel-4': "url('https://picsum.photos/seed/picsum4/1200/1300.webp')",
        'panel-5': "url('https://picsum.photos/seed/picsum5/1200/1300.webp')",
      })
    },
  },
  plugins: [],
};

export const explorer = {
  id: 1,
  name: "root",
  isFolder: true,
  isOpen: true,
  items: [
    {
      id: 2,
      name: "node_modules",
      isFolder: true,
      isOpen: false,
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      isOpen: true,
      items: [
        {
          id: 5,
          name: "lld",
          isFolder: true,
          isOpen: false,
          items: [
            {
              id: 8,
              name: "accordion",
              isFolder: true,
              isOpen: true,
              items: [
                {
                  id: 11,
                  name: "accordion.js",
                  isFolder: false,
                  isOpen: false,
                },
              ],
            },
            { id: 9, name: "todo.js", isFolder: false, isOpen: true },
            {
              id: 10,
              name: "infiniteScroll.js",
              isFolder: false,
              isOpen: false,
            },
          ],
        },
        { id: 6, name: "mock", isFolder: true, isOpen: true },
        { id: 7, name: "App.js", isFolder: false, isOpen: false },
      ],
    },
    {
      id: 4,
      name: "public",
      isFolder: true,
      isOpen: false,
      items: [
        { id: 12, name: "index.html", isFolder: false, isOpen: true },
        { id: 13, name: "favicon.ico", isFolder: false, isOpen: false },
      ],
    },
  ],
};

export const vsCodeMockStructure = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "node_modules",
      isFolder: true,
    },
    {
      id: 3,
      name: "src",
      isFolder: true,

      items: [
        {
          id: 5,
          name: "lld",
          isFolder: true,

          items: [
            {
              id: 8,
              name: "accordion",
              isFolder: true,

              items: [
                {
                  id: 11,
                  name: "accordion.js",
                  isFolder: false,
                },
              ],
            },
            { id: 9, name: "todo.js", isFolder: false, isOpen: true },
            {
              id: 10,
              name: "infiniteScroll.js",
              isFolder: false,
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
      items: [
        { id: 12, name: "index.html", isFolder: false, isOpen: true },
        { id: 13, name: "favicon.ico", isFolder: false, isOpen: false },
      ],
    },
  ],
};

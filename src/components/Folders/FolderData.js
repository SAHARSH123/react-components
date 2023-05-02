export const data = {
  folderName: "root",
  isFolder: true,
  items: [
    {
      folderName: "public",
      isFolder: true,
      items: [{ folderName: "index.html", isFolder: false, items: [] }],
    },
    {
      folderName: "src",
      isFolder: true,
      items: [
        {
          folderName: "components",
          isFolder: true,
          items: [{ folderName: "test.js", isFolder: false, items: [] }],
        },
      ],
    },
    { folderName: "Utils.js", isFolder: true, items: [] },
    { folderName: "package.json", isFolder: false, items: [] },
  ],
};

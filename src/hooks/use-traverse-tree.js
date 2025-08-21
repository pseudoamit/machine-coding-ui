/**
 * Custom hook to traverse and manipulate a tree-like data structure (Explorer).
 *
 * Use Case:
 * ----------
 * - This is typically used for file/folder explorers (like VS Code sidebar).
 * - The function `insertNode` allows adding a new folder or file
 *   into the correct place in the tree.
 *
 * Tree Node Structure:
 * --------------------
 * {
 *   id: number | string,       // unique identifier for file/folder
 *   name: string,              // file/folder name
 *   isFolder: boolean,         // true => folder, false => file
 *   items: []                  // child nodes (only for folders)
 * }
 *
 * Example:
 * ----------
 * insertNode(3, tree, true, "New Folder");
 * - Finds the folder with id = 3 in the tree
 * - Adds a new folder named "New Folder" inside it
 */

const useTraverseTree = () => {
  /**
   * Insert a new file/folder into the tree structure
   *
   * @param {number|string} newFolderId - The id of the folder where the new item should be added
   * @param {Object} treeData - The current tree structure
   * @param {boolean} isFolder - Whether the new item is a folder (true) or a file (false)
   * @param {string} itemName - The name of the new folder/file
   *
   * @returns {Object} Updated tree structure with the new item inserted
   */
  function insertNode(newFolderId, treeData, isFolder, itemName) {
    // Base case:
    // If we find the target folder (matching id and must be a folder),
    // we add the new item inside its items array.
    if (treeData.id === newFolderId && treeData.isFolder) {
      treeData.items.unshift({
        id: new Date().getTime(), // unique id using timestamp
        name: itemName, // new folder/file name
        isFolder: isFolder, // whether it's a folder or file
        items: [], // empty child list (only meaningful for folders)
      });
      return treeData;
    }

    // Recursive case:
    // Traverse deeper into child items until we find the correct folder
    let latestNode = treeData?.items?.map((eachFileOrFolderItem) => {
      return insertNode(newFolderId, eachFileOrFolderItem, isFolder, itemName);
    });

    // Reconstruct tree with updated children (immutability maintained)
    return { ...treeData, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseTree;

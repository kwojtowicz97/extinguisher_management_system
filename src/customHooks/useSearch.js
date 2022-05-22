import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export const useSearch = (defaultList) => {
  const [sortedExtinguishers, setSortedExtinguishers] = useState(defaultList);
  const [config, setConfig] = useState({
    list: defaultList,
    sortBy: "default",
    sortDesc: false,
    searchPattern: "",
  });

  useEffect(() => {
    let filteredList = config.list;
    if (config.searchPattern) {
      const options = {
        findAllMatches: true,
        minMatchCharLength: 0,
        shouldSort: false,
        threshold: 0,
        ignoreLocation: true,
        keys: ["producer", "type"],
      };

      const fuse = new Fuse(config.list, options);

      const pattern = config.searchPattern;

      filteredList = fuse.search(pattern).map((element) => element.item);
    }

    if (config.sortBy !== "default" ) {
        const {sortBy} = config
        filteredList.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }
    
    setSortedExtinguishers(filteredList)
  }, [config.list, config.searchPattern, config.sortBy, config.sortDesc]);

  return [sortedExtinguishers, setConfig];
};

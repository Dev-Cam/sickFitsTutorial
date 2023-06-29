import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // read the number of item in the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      console.log(data);
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we dont havre any items, we mist got to the network to fetch them
        return false;
      }
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to apollo `
        );
        return items; // fallback to network
      }

      return false;

      // first thing it does is ask the read function for those items.
    },

    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when the appolo client comes back from the network with our product
      console.log(`merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}

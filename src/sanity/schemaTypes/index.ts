import { type SchemaTypeDefinition } from "sanity";
import Blog from "../blog";
import like from "../like";
import comment from "../comment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog, like, comment],
};

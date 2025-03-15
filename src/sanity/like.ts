import { defineField, defineType } from "sanity";

const like = defineType({
  name: "like",
  title: "Likes",
  type: "document",
  fields: [
    defineField({
      name: "postId",
      title: "Post ID",
      type: "string",
    }),
    defineField({
      name: "count",
      title: "Like Count",
      type: "number",
      initialValue: 0, // Default 0 likes
    }),
  ],
});

export default like;

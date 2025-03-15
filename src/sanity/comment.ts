import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  type: "document",
  title: "Comments",
  fields: [
    {
      name: "postId",
      type: "string",
      title: "Post ID",
    },
    {
      name: "name",
      type: "string",
      title: "User Name",
    },
    {
      name: "text",
      type: "text",
      title: "Comment Text",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    },
  ],
});

export default comment;

import { Rule } from "sanity";
const Blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "thumbnailImage",
      type: "image",
      title: "Thumbnail Image (For Blog Listing)",
      options: { hotspot: true },
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image (For Blog Detail Page)",
      options: { hotspot: true },
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "likes",
      type: "number",
      title: "Likes",
      initialValue: 0,
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "launchAt",
      type: "datetime",
      title: "Published Date & Time",
      description: "Automatically set when the blog is created",
      initialValue: () => new Date().toISOString(), // ✅ Auto-set current date/time
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
      },
    },
  ],
};

export default Blog;

// schemas/project.js
export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // adjust as needed
      },
    },
    {
      name: 'subtitle',
      title: 'Sub-Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'HTML, CSS, JavaScript', value: 'html-css-javascript'},
          {title: 'React.Js', value: 'reactjs'},
          {title: 'Next.Js', value: 'nextjs'},
          {title: 'Fullstack', value: 'fullstack'},
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imageSlider',
      title: 'Image Slider',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'imageSlider.0', // You can choose the first image for the preview.
    },
  },
}

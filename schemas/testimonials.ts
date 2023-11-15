// schemas/testimonial.js
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'surname',
      title: 'Surname',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'testimony',
      title: 'Testimony',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'testimony',
      media: 'image',
    },
  },
}

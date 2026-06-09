export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL del post',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Ciencia', value: 'Ciencia' },
          { title: 'Tecnología', value: 'Tecnología' },
          { title: 'Historia', value: 'Historia' },
          { title: 'Naturaleza', value: 'Naturaleza' },
          { title: 'Espacio', value: 'Espacio' },
          { title: 'Curiosidades', value: 'Curiosidades' },
          { title: 'Salud', value: 'Salud' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Resumen corto',
      description: 'Una línea que aparece en la tarjeta del post',
      type: 'text',
      rows: 3,
    },
    {
      name: 'funFact',
      title: '💡 Dato curioso destacado',
      description: 'El dato más impactante del post — se muestra en un cuadro especial',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Contenido completo',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'sources',
      title: 'Fuentes (URLs)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare({ title, category, media }: any) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
}

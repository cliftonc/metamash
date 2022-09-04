const Curriculums = {
  slug: 'curriculums',
  admin: {
    defaultColumns: ['curriculumName', 'country', 'updatedAt'],
    useAsTitle: 'curriculumName',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'curriculumName',
      type: 'text',
    },    
    {
      name: 'countries',
      type: 'relationship',
      relationTo: 'countries',
      hasMany: false,
    }, 
  ],
}

export default Curriculums;
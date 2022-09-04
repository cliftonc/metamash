const LearningObjectives = {
  slug: 'learning-objectives',
  admin: {
    defaultColumns: ['objectiveName', 'objectiveShortCode', 'updatedAt'],
    useAsTitle: 'objectiveName',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'objectiveName',
      type: 'text',
    },    
    {
      name: 'objectiveShortCode',
      type: 'text',
    },    
    {
      name: 'description',
      type: 'richText',
      defaultValue: [{
        children: [{ text: 'Here is some default content for this field' }],
      }]
    },      
    {
      name: 'curriculums',
      type: 'relationship',
      relationTo: 'curriculums',
      hasMany: false,
      admin: {
        position: 'sidebar',
      }
    }, 
    {
      name: 'learningGoals',
      type: 'relationship',
      relationTo: 'learning-goals',
      hasMany: true,
      admin: {
        position: 'sidebar',
      }
    }, 
  ],
}

export default LearningObjectives;
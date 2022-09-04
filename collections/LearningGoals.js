import GoalSummary from '../components/GoalSummary'

const LearningGoals = {
  slug: 'learning-goals',
  admin: {
    defaultColumns: ['goalName', 'goalCode', 'updatedAt'],
    useAsTitle: 'goalName',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'goalName',
      type: 'text',
    },    
    {
      name: 'goalCode',
      type: 'text',
    }, 
    {
      name: 'summary',
      // ui fields do not impact the database or api, and serve as placeholders for custom components in the admin panel
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          // this custom component will fetch the posts count for how many posts have this category
          Field: GoalSummary,
        }
      }
    }

  ],
}

export default LearningGoals;
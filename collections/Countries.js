const Countries = {
  slug: 'countries',
  admin: {
    defaultColumns: ['countryName', 'flagEmoji', 'isoCode', 'languageCode', 'updatedAt'],
    useAsTitle: 'countryName',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'countryName',
      type: 'text',
      required: true
    },
    {
      name: 'flagEmoji',
      type: 'text',
      required: true,
      maxLength: 1
    },    
    {
      name: 'isoCode',
      type: 'text',
      required: true,
      maxLength: 3
    },    
    {
      name: 'languageCode',
      type: 'text',
      required: true,
      maxLength: 3
    },    
    
  ],
}

export default Countries;
import { buildConfig } from 'payload/config';
import Countries from './collections/Countries';
import Curriculums from './collections/Curriculums';
import LearningObjectives from './collections/LearningObjectives';
import LearningGoals from './collections/LearningGoals';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Countries,
    Curriculums,
    LearningObjectives,
    LearningGoals,
    Users,
  ],
});

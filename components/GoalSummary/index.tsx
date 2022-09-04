import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { useDocumentInfo } from 'payload/dist/admin/components/utilities/DocumentInfo';

const get = (url: string, params: unknown = {}): Promise<Response> => {
  const query = qs.stringify(params, { addQueryPrefix: true });
  return fetch(`${url}${query}`);
};

/**
 * A custom UI component for the goal to display count of objkectives and add links
 * @constructor
 */
const GoalSummary: React.FC = () => {
  // access the id of a saved document from payload
  const { id } = useDocumentInfo();

  // getters and setters for component state variables
  const [isLoading, setIsLoading] = useState(true);
  const [objectiveCount, setObjectiveCount] = useState(null);
  const [error, setError] = useState(false);

  // useEffect adds a hook so that when the id is set the function is called
  useEffect(() => {
    if (id) {
      const queryRelations = async () => {
        const request = await get('/api/learning-objectives', {
          where: {
            // the 'in' operator is used when relations can be more than one
            learningGoals: { in: id },
            // to add more query constraints use 'or', 'and' operator objects
          },
          depth: 0,
          limit: 0,
        });
        const result = await request.json();

        if (result?.docs) {
          setObjectiveCount(result?.totalDocs);
        }

        if (result.status >= 400) {
          setError(true);
        }

        setIsLoading(false);
      };

      // async functions are defined and called to avoid `await` in useEffect functions
      const ignoreResult = queryRelations();
    }
  }, [id]);


  if (!id) {
    return null;
  }

  if (error) {
    return (<span>There was a problem fetching data</span>);
  }

  return (
    <div>
      <h4>
        Related collections
      </h4>
      {isLoading ? (
          <p>
            loading...
          </p>
      ) : (
        <p>
            {/* collection index filters use url params to allow linking to queries */}
          <a href={`/admin/collections/learning-objectives/?where[or][0][and][0][learningGoals][in][0]=${id}`} >
            {objectiveCount}
            {' '}
            Objectives
          </a>
        </p>
      )}

    </div>
  );
};

export default GoalSummary;
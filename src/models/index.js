// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Session, Task } = initSchema(schema);

export {
  Session,
  Task
};
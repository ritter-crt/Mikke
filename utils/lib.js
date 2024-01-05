import { v4 as uuid } from 'uuid';

const small_id = () => {
  const uniqueId = uuid();
  return uniqueId.slice(0, 8);
};
export default small_id;

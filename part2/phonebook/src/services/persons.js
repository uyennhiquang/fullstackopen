import axios from "axios";
const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then((re) => re.data);
};

const create = person => {
  const request = axios.post(BASE_URL, person);
  return request.then((re) => re.data);
};

const deleteEntry = id => {
  axios.delete(`${BASE_URL}/${id}`);
}

export default {
  getAll,
  create,
  deleteEntry
};

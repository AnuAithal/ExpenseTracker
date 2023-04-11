import { apiHelper } from "./apiHelper";

export const getUserLogin = async (data) => {
  try{
  const response = await apiHelper.post(`/users/login`, data);
  return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getExpense = async () => {
  try {
    const response = await apiHelper.get(`/expenses`);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }

//   return await Promise.resolve(response.data);
};

import { apiHelper } from "./apiHelper";

export const getUserLogin = async (data) => {
  const response = await apiHelper.post(`/users/login`, data);
  return await Promise.resolve(response.data);
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

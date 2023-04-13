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
};

export const addExpense = async (data) => {
  try {
    const response = await apiHelper.post(`/expenses`,data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addRecurrExpense = async (data) => {
  try {
    const response = await apiHelper.post(`/expenses/reccuring`,data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
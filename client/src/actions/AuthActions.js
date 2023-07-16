import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = async (credentials, navigateToDashBoard) => {
  try {
    const { data } = await API.post("/api/user/login", credentials);
    if (data.success) {
      sessionStorage.setItem("user", JSON.stringify(data?.user?.userID));
      sessionStorage.setItem("userRole", JSON.stringify(data?.user?.userRole));
      notification.success({
        message: "Success",
        description: data?.message,
      });
      navigateToDashBoard();
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const signUp = async (userData, navigateToLogin) => {
  try {
    userData.dob = userData.dob.toString();
    userData.purpose = userData.purpose.join(", ");
    userData.userRole = "Member";

    const { data } = await API.post("/api/user/register", userData);
    if (data.success) {
      notification.success({
        message: "Success",
        description: data?.message,
      });
      navigateToLogin();
    }
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const getTrainers = async () => {
  try {
    const { data } = await API.get("/api/user/getallInstructors");
    if (data.success) {
      return data.users;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const getMembers = async () => {
  try {
    const { data } = await API.get("/api/user/getallMembers");
    if (data.success) {
      return data.users;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const updateUser = async (userData) => {
  try {
    userData.dob = userData?.dob?.toString();
    userData.purpose = userData?.purpose?.join(", ");
    const { data } = await API.put(
      `/api/user/updateUser/${userData.userID}`,
      userData
    );
    if (data.success) {
      notification.success({
        message: "Success",
        description: data?.message,
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

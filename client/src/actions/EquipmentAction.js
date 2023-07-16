import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const addEquipment = async (inputData) => {
  try {
    const { data } = await API.post("/api/equipment/add", inputData);
    if (data.success) {
      notification.success({
        message: "Success",
        description: data?.message,
      });
    }
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: error?.response?.data?.message,
      description: error?.response?.data?.error,
    });
  }
};

export const getEquipment = async () => {
  try {
    const { data } = await API.get("/api/equipment/getall");
    if (data.success) {
      return data.equipments;
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

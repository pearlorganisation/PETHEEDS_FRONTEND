import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//create bookNow

export const addReview = createAsyncThunk(
  "addReview",
  async ({ formData }, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/review`, formData, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getReview = createAsyncThunk(
  "getReveiw",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `/review/${productId}?isApproved=true`,
        {
          withCredentials: true,
        }
      );
      console.log(response, "response");
      return response?.data?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

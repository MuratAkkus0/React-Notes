import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isPending: true,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // HTTP istegi yapilirken kulanilmaz.
    deleteList: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log(action);
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) =>
      console.error(action.error.message)
    );
  },
});

export const { deleteList } = usersSlice.actions;
export default usersSlice.reducer;

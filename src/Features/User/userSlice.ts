import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../_Auth/AuthService";

interface UserState {
  user: { email: string; password: string };
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: { email: "", password: "" },
  isAuthenticated: false,
  error: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials: { email: string; password: string }) => {
    try {
      const response = await authService.login(credentials);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    {
      throw Error;
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (userData: { email: string; password: string }) => {
    try {
      const response = await authService.signup(userData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    {
      throw Error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = { email: "", password: "" };
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = { email: "", password: "" };
        state.error = action.error.message ?? "Login failed";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = { email: "", password: "" };
        state.error = action.error.message ?? "Signup failed";
      });
  },
});

export const { logout } = userSlice.actions;
export const selectIsAuthenticated = (state: { user: UserState }) =>
  state.user.isAuthenticated;
export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;

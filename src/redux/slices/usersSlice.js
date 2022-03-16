import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    dataNext: [],
    dataSingle: null,
    loading: true,
    productLoading: true,
    userProducts: [],
    editUserStatus: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataNext: (state, action) => {
      state.dataNext = action.payload;
    },
    setDataSingle: (state, action) => {
      state.dataSingle = action.payload;
    },
    setUserProducts: (state, action) => {
      state.userProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProductLoading: (state, action) => {
      state.productLoading = action.payload;
    },
    setEditUserStatus: (state, action) => {
      state.editUserStatus = action.payload;
    },
  },
});

export const {
  setData,
  setDataSingle,
  setLoading,
  setUserProducts,
  setDataNext,
  setProductLoading,
  setEditUserStatus,
} = usersSlice.actions;

export const selectUsers = (state) => state.users;

export const fetchUsers = (page, limit) => async (dispatch) => {
  dispatch(setLoading(true));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users?p=${page}&l=${limit}`
  );
  const rNext = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users?p=${
      page + 1
    }&l=${limit}`
  );

  const data = await r.json();
  const dataNext = await rNext.json();

  dispatch(setData(data));
  dispatch(setDataNext(dataNext));

  dispatch(setLoading(false));
};

export const fetchUser = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${id}`
  );
  const data = await r.json();
  dispatch(setDataSingle(data));
  dispatch(setLoading(false));
};

export const updateUser = (id, name, age) => async (dispatch) => {
  dispatch(setEditUserStatus("Updating..."));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${id}`,
    {
      method: "PUT",
      body: [
        { op: "replace", path: "age", value: age },
        { op: "replace", path: "name", value: name },
      ],
    }
  );
  dispatch(setEditUserStatus("Done!"));
  setTimeout(() => {
    dispatch(setEditUserStatus(""));
  }, 2000);
};

export const removeUser = (id) => async (dispatch) => {
  await fetch(`https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${id}`, {
    method: "DELETE",
  });
};

export const fetchUserProducts = (id) => async (dispatch) => {
  dispatch(setProductLoading(true));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/products?userId=${id}`
  );
  const data = await r.json();
  dispatch(setUserProducts(data));
  dispatch(setProductLoading(false));
};

export const fetchUserByName = (name) => async (dispatch) => {
  if (name === "") {
    return dispatch(setDataSingle(null));
  }
  dispatch(setLoading(true));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users?search=${name}`
  );
  const data = await r.json();
  dispatch(setDataSingle(data));
  dispatch(setLoading(false));
};

export const orderUsers = (dir) => async (dispatch) => {
  dispatch(setLoading(true));
  const r = await fetch(
    `https://621c7b30768a4e1020ab3244.mockapi.io/api/users?sortBy=age&order=${dir}`
  );
  const data = await r.json();
  dispatch(setData(data));
  dispatch(setLoading(false));
};

export default usersSlice.reducer;

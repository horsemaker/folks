import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addPostCommentService,
  createPostService,
  deletePostCommentService,
  deletePostService,
  dislikePostService,
  downvotePostCommentService,
  editPostCommentService,
  editPostService,
  getAllPostsService,
  likePostService,
  upvotePostCommentService,
} from "../../services";

const initialPostsState = {
  data: [],
  loading: false,
  error: "",
};

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsService();
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading!",
        description: "Unable to fetch posts. Try reloading.",
      });
    }
  }
);

const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await createPostService(postData, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(postId, postData, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const addPostComment = createAsyncThunk(
  "posts/addPostComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await addPostCommentService(postId, commentData, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const upvotePostComment = createAsyncThunk(
  "posts/upvotePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await upvotePostCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const downvotePostComment = createAsyncThunk(
  "posts/downvotePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await downvotePostCommentService(
        postId,
        commentId,
        token
      );
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const deletePostComment = createAsyncThunk(
  "posts/deletePostComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostCommentService(postId, commentId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const editPostComment = createAsyncThunk(
  "posts/editPostComment",
  async ({ postId, commentId, commentData, token }, { rejectWithValue }) => {
    try {
      const { data } = await editPostCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.loading = false;
      state.error = "";
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [editPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addPostComment.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [addPostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [upvotePostComment.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [upvotePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [downvotePostComment.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [downvotePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deletePostComment.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [deletePostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [editPostComment.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [editPostComment.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const postsReducer = postsSlice.reducer;

export {
  postsReducer,
  getAllPosts,
  createPost,
  likePost,
  dislikePost,
  editPost,
  deletePost,
  addPostComment,
  upvotePostComment,
  downvotePostComment,
  deletePostComment,
  editPostComment,
};

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axiosInstance from '../../Helpers/axiosInstance';
const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')|| false,
    role:localStorage.getItem('role')|| '',
    data:localStorage.getItem==undefined?JSON.parse(localStorage.getItem("data")):{}|| {}
}
export const createAccount =createAsyncThunk('auth/signup',async(data)=>{
    try{
        const res=axiosInstance.post("/register",data);
        toast.promise(res,{
            loading:"Wait! creating your account",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to create account"
        })
        return (await res).data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})
export const loginUser=createAsyncThunk('auth/login',async(data)=>{
    try{
        const res=axiosInstance.post("/login",data);
         toast.promise(res,{
            loading:"Wait! logging in",
            success:(data)=>{
                return data?.data?.message
        },
        error:"Failed to login"
    })
    return (await res).data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{}
})
 
export const {}=authSlice.actions;
export default authSlice.reducer;
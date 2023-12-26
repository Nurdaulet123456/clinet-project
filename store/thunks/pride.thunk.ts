import { assetsApi } from "@/api/assets.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSchoolSportThunk = createAsyncThunk(
    'getSchoolSportThunk',
    async () => (await assetsApi.getSchoolSport())
)

export const getSchoolAltynThunk = createAsyncThunk(
    'getSchoolAltynThunk',
    async () => (await assetsApi.getSchoolAltyn())
)

export const getSchoolOlimpThunk = createAsyncThunk(
    'getSchoolOlimpThunk',
    async () => (await assetsApi.getSchoolOlimp())
)

export const getSchoolAtestThunk = createAsyncThunk(
    'getSchoolAtestThunk',
    async () => (await assetsApi.getSchoolAtestat())
)

export const getSchoolOnerThunk = createAsyncThunk(
    'getSchoolOnerThunk',
    async () => (await assetsApi.getSchoolOner())
)

export const getLessonsThunk = createAsyncThunk(
    'getLessonsThunk',
    async () => (await assetsApi.getLessons())
)

export const getExtraThunk = createAsyncThunk(
    'getExtraThunk',
    async () => (await assetsApi.getExtraLessons())
)

export const getDopThunk = createAsyncThunk(
    'getDopThunk',
    async () => (await assetsApi.getCallsDop())
)

export const getOSThunk = createAsyncThunk(
    'getOSThunk',
    async () => (await assetsApi.getCallsOS())
)

export const getClassNameThunk = createAsyncThunk(
    'getClassNameThunk',
    async () => (await assetsApi.getPrideClasses())
)

export const getTeachersThunk = createAsyncThunk(
    'getTeachersThunk',
    async () => (await assetsApi.getTeachers())
)

export const getNewsThunk = createAsyncThunk(
    'getNewsThunk',
    async () => (await assetsApi.getNews())
)

export const getScheduleThunk = createAsyncThunk(
    'getScheduleThunk',
    async () => (await assetsApi.getSchedule())
)

interface IProps {
    class_name?: string
    osnova_smena?: string
}

export const getClassThunk = createAsyncThunk(
    'getClassThunk',
    async ({ class_name, osnova_smena }: IProps) => (await assetsApi.getClasses(class_name, osnova_smena))
)
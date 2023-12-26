import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initaialStatePrideInfo } from "../types/pride.system";
import {
    getClassNameThunk,
    getClassThunk,
    getDopThunk,
    getExtraThunk,
    getLessonsThunk,
    getNewsThunk,
    getOSThunk,
    getScheduleThunk,
    getSchoolAltynThunk,
    getSchoolAtestThunk,
    getSchoolOlimpThunk,
    getSchoolOnerThunk,
    getSchoolSportThunk,
    getTeachersThunk,
} from "../thunks/pride.thunk";
import {
    ICalls,
    IClass,
    IClassName,
    IExtraLessons,
    ILessons,
    INews,
    ISchedule,
    ISchoolAltyn,
    ISchoolAtest,
    ISchoolOlimp,
    ISchoolOner,
    ISchoolSport,
} from "@/types/assets.types";

export const prideSlice = createSlice({
    name: "pridelInfoSlice",
    initialState: initaialStatePrideInfo,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(
                getSchoolSportThunk.fulfilled,
                (state, action: PayloadAction<ISchoolSport[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            sport: action.payload,
                        };
                    }
                    return state;
                }
            )
            .addCase(
                getSchoolAltynThunk.fulfilled,
                (state, action: PayloadAction<ISchoolAltyn[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            altyn: action.payload,
                        };
                    }
                    return state;
                }
            )
            .addCase(
                getSchoolOnerThunk.fulfilled,
                (state, action: PayloadAction<ISchoolOner[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            oner: action.payload,
                        };
                    }
                    return state;
                }
            )

            .addCase(
                getSchoolOlimpThunk.fulfilled,
                (state, action: PayloadAction<ISchoolOlimp[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            olimp: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getSchoolAtestThunk.fulfilled,
                (state, action: PayloadAction<ISchoolAtest[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            atest: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getLessonsThunk.fulfilled,
                (state, action: PayloadAction<any[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            lessons: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getExtraThunk.fulfilled,
                (state, action: PayloadAction<IExtraLessons[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            extra: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getDopThunk.fulfilled,
                (state, action: PayloadAction<ICalls[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            dop: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getOSThunk.fulfilled,
                (state, action: PayloadAction<ICalls[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            os: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getClassNameThunk.fulfilled,
                (state, action: PayloadAction<IClassName[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            classname: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getTeachersThunk.fulfilled,
                (state, action: PayloadAction<IClassName[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            teachers: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getNewsThunk.fulfilled,
                (state, action: PayloadAction<INews[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            news: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getScheduleThunk.fulfilled,
                (state, action: PayloadAction<ISchedule[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            schedule: action.payload,
                        };
                    }
                    return state;
                }
            ).addCase(
                getClassThunk.fulfilled,
                (state, action: PayloadAction<IClass[]>) => {
                    if (action.payload) {
                        return {
                            ...state,
                            class: action.payload,
                        };
                    }
                    return state;
                }
            )
    },
});

export const { actions } = prideSlice;

export default prideSlice.reducer;
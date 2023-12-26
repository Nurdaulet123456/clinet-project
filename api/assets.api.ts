import { instance } from "./axios.instance";
import { IKruzhok, IMenu, ICalls, IClassRoom, IClass, INews, ITeachers, ISchoolInfo, IClassName, IUsers, ISchoolAdmin, ISchoolPassport, ISchoolPhotos, ISchoolSocialMedia, ISchoolSport, ISchoolAltyn, ISchoolAtest, ISchoolOlimp, ISchoolOner, ILessons, IExtraLessons } from "@/types/assets.types";

export const assetsApi = {
    async getKruzhok(): Promise<IKruzhok[]> {
        return await instance.get('/api/kruzhok/')
    },

    async getSlassInfo(): Promise<IClass[]> {
        return await instance.get(`/api/class/`)
    },

    async getMenu(): Promise<IMenu[]> {
        return await instance.get('/api/menu/')
    },

    async getClassRoom(): Promise<IClassRoom[]> {
        return await instance.get('/api/classroom/')
    },

    async getSchool(): Promise<ISchoolInfo[]> {
        return await instance.get(`/api/school/`)
    },

    async getUsers(): Promise<IUsers[]> {
        return await instance.get('/auth/users/')
    },

    async getSchoolAdministration(): Promise<ISchoolAdmin[]> {
        return await instance.get('/api/school_administration/')
    },

    async getSchoolPassport(): Promise<ISchoolPassport[]> {
        return await instance.get('/api/schoolpasport/')
    },

    async getSchoolPhotos(): Promise<ISchoolPhotos[]> {
        return await instance.get('/api/slider/')
    },

    async getSchoolSocialMedia(): Promise<ISchoolSocialMedia[]> {
        return await instance.get('/api/School_SocialMediaApi/')
    },

    // pride school

    async getSchoolSport(): Promise<ISchoolSport[]> {
        return await instance.get('/api/Sport_SuccessApi/')
    },

    async getSchoolOner(): Promise<ISchoolOner[]> {
        return await instance.get('/api/Oner_SuccessApi/')
    },

    async getSchoolOlimp(): Promise<ISchoolOlimp[]> {
        return await instance.get('/api/PandikOlimpiadaApi/')
    },

    async getSchoolAltyn(): Promise<ISchoolAltyn[]> {
        return await instance.get('/api/School_AltynBelgiApi/')
    },

    async getSchoolAtestat(): Promise<ISchoolAtest[]> {
        return await instance.get('/api/School_RedCertificateApi/')
    },

    // Lessons

    async getLessons(): Promise<any> {
        return await instance.get('/api/subject/')
    },

    // Extra Lessons

    async getExtraLessons(): Promise<IExtraLessons[]> {
        return await instance.get('/api/extra_lesson/')
    },

    // Calls

    async getCallsDop(): Promise<ICalls[]> {
        return await instance.get('/api/DopUrokRingApi/')
    },

    async getCallsOS(): Promise<ICalls[]> {
        return await instance.get('/api/ringApi/')
    },

    async getPrideClasses(): Promise<IClassName[]> {
        return await instance.get('/api/prideofschool/available_classes/')
    },

    async getTeachers(): Promise<ITeachers[]> {
        return await instance.get('/api/teacher/')
    },

    async getNews(): Promise<INews[]> {
        return await instance.get('/api/newsApi/')
    },
}
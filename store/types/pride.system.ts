import { ICalls, IClass, IClassName, IExtraLessons, ILessons, INews, ISchedule, ISchoolAltyn, ISchoolAtest, ISchoolOlimp, ISchoolOner, ISchoolSport, ITeachers } from "@/types/assets.types"

export interface IPrideInfo {
    sport?: ISchoolSport[]
    olimp?: ISchoolOlimp[]
    atest?: ISchoolAtest[]
    altyn?: ISchoolAltyn[]
    oner?: ISchoolOner[]
    lessons?: any[]
    extra?: IExtraLessons[]
    dop?: ICalls[]
    os?: ICalls[]
    classname?: IClassName[]
    teachers?: ITeachers[]
    news?: INews[]
    schedule?: ISchedule[],
    class?: IClass[]
}

export const initaialStatePrideInfo: IPrideInfo = {
    olimp: [],
    sport: [],
    atest: [],
    altyn: [],
    oner: [],
    lessons: [],
    extra: [],
    dop: [],
    os: [],
    classname: [],
    teachers: [],
    news: [],
    schedule: [],
    class: []
}
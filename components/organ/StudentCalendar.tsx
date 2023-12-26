import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getScheduleThunk } from "@/store/thunks/pride.thunk";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

interface StudentCalendarProps {}

const StudentCalendar: FC<StudentCalendarProps> = (
  {
    // component props
  }
) => {
  const dispatch = useAppDispatch();
  const schedule = useTypedSelector((state) => state.pride.schedule);

  const router = useRouter();

  useEffect(() => {
    if (schedule) {
      dispatch(getScheduleThunk());
    }
  }, [dispatch, router.query.id]);

  const formatTime = (time: any) => {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  console.log(schedule);

  return (
    <div className="table">
      <div className="table_row">
        <div className="table_cell table_cell-neutral" />
        {daysOfWeek.map((day, index) => {
          const days = daysOfWeek[index];
          const lessonsCount =
            schedule &&
            schedule.filter(
              (lesson) =>
                lesson?.week_day === String(index + 1) &&
                lesson?.classl?.class_name === String(router.query.id![0])
            ).length;
          return (
            <div className="table_cell table_cell-header" key={index}>
              <p className="table_title">
                {days} {`(${lessonsCount})`}
              </p>
              <p className="table_subtitle">+1 қосымша сабақ</p>
            </div>
          );
        })}
      </div>
      {time.map((item, timeIndex) => (
        <div className="table_row" key={timeIndex}>
          <div className="table_cell table_cell-side">
            <div className="table_number">№{timeIndex + 1}</div>
            <p className="table_title table_time">
              {formatTime(item.start_time)}
            </p>
            <p className="table_title table_time">
              {formatTime(item.end_time)}
            </p>
          </div>
          {daysOfWeek.map((day, dayIndex) => {
            const lesson =
              schedule &&
              schedule.find(
                (s) =>
                  s?.week_day === String(dayIndex + 1) &&
                  s?.ring?.start_time === item.start_time &&
                  s.classl?.class_name === router.query.id![0]
              );

            console.log(lesson);
            return lesson ? (
              <div
                className={`table_cell table_cell-inactive table_cell-content`}
                key={dayIndex}
              >
                <p className="table_pan">{lesson?.subject?.full_name}</p>
                <p className="table_less">Сабақ</p>
                <p className="table_caption">
                  {lesson?.classroom?.classroom_number}
                </p>
                <p className="table_grade">{lesson?.teacher?.full_name}</p>
              </div>
            ) : (
              <div
                className={`table_cell table_cell-inactive table_cell-content table_no`}
                key={dayIndex}
              >
                {" "}
                <p className="table_subtitle table_no-title">Сабақ жоқ</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let time = [
  {
    start_time: "08:00:00",
    end_time: "08:50:00",
  },

  {
    start_time: "08:55:00",
    end_time: "09:40:00",
  },

  {
    start_time: "09:50:00",
    end_time: "10:35:00",
  },

  {
    start_time: "10:45:00",
    end_time: "11:35:00",
  },

  {
    start_time: "11:30:00",
    end_time: "12:15:00",
  },

  {
    start_time: "12:35:00",
    end_time: "13:25:00",
  },

  {
    start_time: "13:30:00",
    end_time: "14:10:00",
  },

  {
    start_time: "14:15:00",
    end_time: "15:00:00",
  },

  {
    start_time: "15:40:00",
    end_time: "16:10:00",
  },
];
export default StudentCalendar;

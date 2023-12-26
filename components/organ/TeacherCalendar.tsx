import React, { FC } from "react";

interface TeacherCalendarProps {

}

const TeacherCalendar: FC<TeacherCalendarProps> = ({
  // component props
}) => {
  const tableHeader = [
    {
      id: 1,
      title: "Дүйсенбі",
    },
    {
      id: 2,
      title: "Сейсенбі",
    },
    {
      id: 3,
      title: "Сәрсенбі",
    },
    {
      id: 4,
      title: "Бейсенбі",
    },
    {
      id: 5,
      title: "Жұма",
    },
    {
      id: 6,
      title: "Сенбі",
    }
  ];
  const tableContent = [
    {
      id: 1,
      startTime: "8:30",
      endTime: "9:10",
      lessons: [
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
      ],
    },
    {
      id: 2,
      startTime: "9:15",
      endTime: "10:00",
      lessons: [
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
      ],
    },
    {
      id: 3,
      startTime: "10:05",
      endTime: "10:50",
      lessons: [
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
      ],
    },
    {
      id: 4,
      startTime: "11:00",
      endTime: "11:40",
      lessons: [
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
      ],
    },
    {
      id: 5,
      startTime: "11:45",
      endTime: "12:30",
      lessons: [
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
        {
          subtitle: "Орыс және орыс әдебиеті",
          caption: "Сабақ",
          cabinet: "305",
          grade: "7Б",
        },
      ],
    },
  ];
  return (
    <div className="table">
      <div className="table_row">
        <div className="table_cell table_cell-neutral" />
        {tableHeader.map((item) => (
          <div className="table_cell table_cell-header" key={item.id}>
            <p className="table_title">{item.title} (7)</p>
            <p className="table_subtitle">+1 қосымша сабақ</p>
          </div>
        ))}
      </div>
      {tableContent.map((item) => (
        <div className="table_row">
          <div className="table_cell table_cell-side">
            <span className="table_number">№{item.id}</span>
            <p className="table_title table_time">{item.startTime}</p>
            <p className="table_title table_time">{item.endTime}</p>
          </div>
          {item.lessons.map((lesson) => (
            <div className="table_cell table_cell-secondary table_cell-content">
              <p className="table_subtitle">{lesson.subtitle}</p>
              <p className="table_caption">{lesson.caption}</p>
              <p className="table_cabinet">{lesson.cabinet}</p>
              <p className="table_grade">{lesson.grade}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeacherCalendar;
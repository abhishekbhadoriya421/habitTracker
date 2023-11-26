import style from "./style.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { habitSelector } from "../../redux/reducer/habitReducer";
import WeekViewHabitTrackerComponent from "./weekViewHabitTrackerComponent";
export default function WeekViewComponent() {
  const habitData = useSelector(habitSelector);
  return (
    <>
      <main className={style.weekViewContainer}>
        <p className={style.yearContent}>2023</p>
        <div className={style.Days}>
          <p className={style.weekDay}>Sun</p>
          <p className={style.weekDay}>Mon</p>
          <p className={style.weekDay}>Tue</p>
          <p className={style.weekDay}>Wed</p>
          <p className={style.weekDay}>Thu</p>
          <p className={style.weekDay}>Fri</p>
          <p className={style.weekDay}>Sat</p>
        </div>
        {/* Habit Details */}
        {habitData.map((ele, ind) => (
         <WeekViewHabitTrackerComponent key={ind} habitData={ele} ind={ind}/>
        ))}
      </main>
    </>
  );
}

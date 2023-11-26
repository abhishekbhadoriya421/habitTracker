import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { actions } from "../../../redux/reducer/habitReducer";
export default function HabitComponent({ habitData, index }) {
  const { habit, time} = habitData;
  const dispatch = useDispatch();
  // Counting the number of days are Done
  const doneDaysCount = Object.values(habitData).filter(value => value === "Done").length;

  // handling Delete habit
  function handleDeleteHabit(){
    dispatch(actions.delete(index))
  }
  return (
    <>
      <div className={style.habitItem}>
        <div className={style.textContent}>
          <p className={style.habitContent}>{habit}</p>
          <div className={style.dateAndTrack}>
            <p className={style.date}>{time}</p>
            <p className={style.track}>{doneDaysCount}/10</p>
          </div>
        </div>

        <div className={style.deleteIcon}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            alt="loading..."
            onClick={handleDeleteHabit}
            title="delete"
          />
        </div>
      </div>
    </>
  );
}

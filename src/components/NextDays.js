export default function NextDays({ setDay, weatherData: wd }) {
  const buttons = [1, 2, 3, 4, 5, 6, 7];
  const normal_buttons = buttons.map((b) => (
    <button key={b} className="normal-view" onClick={() => setDay(b)}>
      {wd[b].day_of_the_week}
    </button>
  ));
  const mini_buttons = buttons.map((b) => (
    <button key={b} className="mini-view" onClick={() => setDay(b)}>
      {wd[b].day_of_the_week.slice(0, 3)}
    </button>
  ));

  return (
    <div className="next-days">
      {normal_buttons}
      {mini_buttons}
    </div>
  );
}

import './App.css';
import ShowTeamInfo, {  } from './Components/FootballTeam';

const teams = [
  { 'name': 'Динамо Киев', 'city': 'Киев', 'date': '1927г', 'trainer': 'Александр Шовковский', 'people': 21, 'imageUrl': 'assets/img/dinamo.jpg', 'imageW': 400, 'imageH': 250 },
  { 'name': 'Одесса Киев', 'city': 'Киев', 'date': '1957г', 'trainer': 'Александр Мягков', 'people': 18, 'imageUrl': 'assets/img/dinamo.jpg', 'imageW': 400, 'imageH': 250 }
];

function App() {
  return (
    <div className="App">
      {teams.map(item => (
        <ShowTeamInfo
          name={item.name}
          city={item.city}
          date={item.date}
          trainer={item.trainer}
          people={item.people}
          imageUrl={item.imageUrl}
          imageW={item.imageW}
          imageH={item.imageH}
        />
      ))}
    </div>
  );
}

export default App;

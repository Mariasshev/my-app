
import './App.css';
import {ShowInfo, ShowPhoto, ShowBio} from './Components/personInfo'
import { ShowTeamInfo, Achievment, AboutTeam } from './Components/football';

function App() {
  return (
    <div className="App">
      {/* <ShowInfo></ShowInfo>
      <ShowPhoto></ShowPhoto>
      <ShowBio></ShowBio> */}

      <ShowTeamInfo></ShowTeamInfo>
      <Achievment></Achievment>
      <AboutTeam></AboutTeam>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Generator } from './components/generator-points/generator-points';
import { PanelWinner } from './components/panel-win/panel-win';
import { Controler } from './components/controler/controler';
import { TournamentCard } from './components/tournament-card/tournament-card';
import { DataInput } from './components/data-input/data-input';
import './App.css';

const transformationData = (arr) => {
    const a = arr.split(',');
    console.log(a);
    const b = a.map((item) => {
        return item.split(':');
    });
    console.log(b);
    return b;
};

function App() {
    const [saveTeamNameOne, setSaveTeamNameOne] = useState('');
    const [saveTeamNameTwo, setSaveTeamNameTwo] = useState('');
    const [nameTeamOne, setNameTeamOne] = useState('');
    const [nameTeamTwo, setNameTeamTwo] = useState('');
    const [data, setData] = useState('');
    const [str, setStr] = useState([]);

    const [victoryPoint, setVictoryPoint] = useState(3);
    const [defeatPoint, setDefeatPoint] = useState(0);
    const [drawPoint, setDrawPoint] = useState(1);

    const addNameTeam = () => {
        setNameTeamOne(saveTeamNameOne);
        setNameTeamTwo(saveTeamNameTwo);
        setSaveTeamNameOne('');
        setSaveTeamNameTwo('');
        setStr(transformationData(data));
        setData('');
    };

    return (
        <div>
            <DataInput
                saveTeamNameOne={saveTeamNameOne}
                setSaveTeamNameOne={setSaveTeamNameOne}
                saveTeamNameTwo={saveTeamNameTwo}
                setSaveTeamNameTwo={setSaveTeamNameTwo}
                setData={setData}
                data={data}
                addNameTeam={addNameTeam}
            />
            <div className='main'>
            <PanelWinner
                str={str}
                nameTeamOne={nameTeamOne}
                nameTeamTwo={nameTeamTwo}
                victoryPoint={victoryPoint}
                defeatPoint={defeatPoint}
                drawPoint={drawPoint}
            />
            <TournamentCard
                str={str}
                nameTeamOne={nameTeamOne}
                nameTeamTwo={nameTeamTwo}
            />
            </div>
            <Controler
                victoryPoint={victoryPoint}
                setVictoryPoint={setVictoryPoint}
                defeatPoint={defeatPoint}
                setDefeatPoint={setDefeatPoint}
                drawPoint={drawPoint}
                setDrawPoint={setDrawPoint}
            />
            <Generator/>
        </div>
    );
}

export default App;

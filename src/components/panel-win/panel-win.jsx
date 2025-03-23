export const PanelWinner = (props) => {
    const { str } = props;
    const { nameTeamOne, nameTeamTwo } = props;
    const { victoryPoint, defeatPoint, drawPoint } = props;

    const createPointsStrategy = (victoryPoint, defeatPoint, drawPoint) => {
        return {
          'draw': [drawPoint, drawPoint],
          'homeWin': [victoryPoint, defeatPoint],
          'awayWin': [defeatPoint, victoryPoint],
          'default': [defeatPoint, defeatPoint],
        }
    }

    const calculatePointsStrategy = (homeScore, awayScore) => {
        if (homeScore === awayScore) {
          return 'draw';
        }
        if (homeScore > awayScore) {
          return 'homeWin';
        }
        return 'awayWin';
    }
    
    const pointsStrategy = createPointsStrategy(victoryPoint, defeatPoint, drawPoint);
    const temporaryResult = pointsStrategy['default'];
    
    str.forEach((game) => {
        const [team1, team2] = game;
        const strategy = calculatePointsStrategy(team1, team2);
        const points = pointsStrategy[strategy];
        points.forEach((point, index) => {
          temporaryResult[index] += point;
        });
    });


    const team1 = {
        name: nameTeamOne,
        point: temporaryResult[0]
    }
    const team2 = {
        name: nameTeamTwo,
        point: temporaryResult[1]
    }
  
    const win = team1.point > team2.point ? team1 : team2;
    const lus = team1.point > team2.point ? team2 : team1;

    return (
        <div>
            <h2>comand win : {win.name}, points: {win.point}</h2>
            <h2> command los : {lus.name}, points: {lus.point}</h2>
        </div>
    );
};

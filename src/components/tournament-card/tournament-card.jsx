import './tournament-card.css'

export const TournamentCard = ({str, nameTeamOne, nameTeamTwo}) => {
    return (
        <div>
            <div className="bracket">
                {str.map((item, index) => {
                    return (
                        <div className="match" key={index}>
                            <span>{nameTeamOne}</span>
                            <span>{`${item[0]} : ${item[1]}`}</span>
                            <span>{nameTeamTwo}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
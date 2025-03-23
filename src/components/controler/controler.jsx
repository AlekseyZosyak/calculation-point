import './controler.scss';

export const Buttons = ({ text, func, selector }) => {
    return <button className={selector} onClick={func}>{text}</button>;
};

const CardPoint = ({ name, point, setPoint }) => {
    const plus = () => {
        setPoint(point + 1);
        
    };
    const minus = () => {
        setPoint(point - 1);
    };

    return (
        <div className="card">
            <h2 className="card__title">{name}</h2>
            <div className='card__button-container'>
                <Buttons selector={'card__button'} text={'+'} func={plus} />
                <span className="card__point">{point}</span>
                <Buttons selector={'card__button'} text={'-'} func={minus} />
            </div>
        </div>
    );
};

export const Controler = (props) => {
    const { setVictoryPoint, setDefeatPoint, setDrawPoint } = props;
    const { victoryPoint, defeatPoint, drawPoint} = props;
    return (
        <div className='container'>
            <CardPoint name={'Victory point'}  setVictoryPoint={setVictoryPoint} point={victoryPoint} setPoint={setVictoryPoint}/>
            <CardPoint name={'Defeat point'} setDefeatPoint={setDefeatPoint} point={defeatPoint} setPoint={setDefeatPoint}/>
            <CardPoint name={'Draw point'} setDrawPoint={setDrawPoint} point={drawPoint} setPoint={setDrawPoint}/>
        </div>
    );
};

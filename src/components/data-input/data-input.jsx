import { Generator } from '../generator-points/generator-points';
import './data-input.scss';


const Title = () => {
    return (
        <div className='title'>
            <h1 className='title__text'>School football championship "strong legs" </h1>
        </div>
    )
}


export const DataInput = (props) => {
    const { saveTeamNameOne, saveTeamNameTwo } = props;
    const { setSaveTeamNameOne, setSaveTeamNameTwo } = props;
    const { data, setData } = props;
    const { addNameTeam } = props;


    return (
    <div >   
        <Title />
        <div className="data">
            <div className='data__box'>
                <p>name team number 1</p>
                <input 
                    className='data__input'
                    type="text"
                    value={saveTeamNameOne}
                    onChange={(event) => setSaveTeamNameOne(event.target.value)}
                />
            </div>
            <div className='data__box'>
                <p>matches played</p>
                <input
                    className='data__input'
                    type="text"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                />
            </div>
            <div className='data__box'>
                <p>name team number 2</p>
                <input
                    className='data__input'
                    type="text"
                    value={saveTeamNameTwo}
                    onChange={(event) => setSaveTeamNameTwo(event.target.value)}
                />
            </div>
        </div>
        <div className='container'>
            <button className='data__button' onClick={addNameTeam}>count points</button>
        </div>
    </div>   
    );
};

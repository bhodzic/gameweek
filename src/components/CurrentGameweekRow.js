import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { predict } from '../slices/predictionsSlice';
import CurrentGameweekDetails from "./CurrentGameweekDetails";


function CurrentGameweekRow({ team1, team2, fixtureKey }) {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const prediction = useSelector((state) => state.predictions[fixtureKey]);
    const dispatch = useDispatch();

    const handleClick1 = () => {
        dispatch(predict({ fixtureKey, prediction: '1' }));
    }

    const handleClickX = () => {
        dispatch(predict({ fixtureKey, prediction: 'X' }));
    }

    const handleClick2 = () => {
        dispatch(predict({ fixtureKey, prediction: '2' }));
    }

    const handleClickDetails = () => {
        setDetailsVisible(prevState => !prevState);
    }

    return (
        <>
            <div className="current-gameweek-row">
                <div className="cgr-teams">
                    <span className="cgr-team-name cgr-team-name-first">{team1.name}</span>
                    <span className="cgr-team-short-name">{team1.shortName}</span>
                    <img src={`https://resources.premierleague.com/premierleague/badges/25/t${team1.imgId}.png`} />
                    <span className={`cgr-prediction${prediction == '1' ? ' cgr-active-prediction' : ''}`} onClick={handleClick1}>1</span>
                    <span className={`cgr-prediction${prediction == 'X' ? ' cgr-active-prediction' : ''}`} onClick={handleClickX}>X</span>
                    <span className={`cgr-prediction${prediction == '2' ? ' cgr-active-prediction' : ''}`} onClick={handleClick2}>2</span>
                    <img src={`https://resources.premierleague.com/premierleague/badges/25/t${team2.imgId}.png`} />
                    <span className="cgr-team-name">{team2.name}</span>
                    <span className="cgr-team-short-name">{team2.shortName}</span>
                </div>
                <div className="cgr-details" onClick={handleClickDetails}>{detailsVisible ? 'hide' : 'show'} details</div>
                {detailsVisible && <CurrentGameweekDetails fixtureKey={fixtureKey} team1={team1} team2={team2} />}
            </div>

        </>
    );
}

export default CurrentGameweekRow;
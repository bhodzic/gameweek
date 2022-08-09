import { useSelector } from 'react-redux';

import CurrentGameweekRow from "./CurrentGameweekRow";
import SubmitPrediction from './SubmitPrediction';

function CurrentGameweekList() {
    const fixtures = useSelector((state) => state.fixtures);
    let cgDataRenderer;
    if (fixtures.status == 'loading') {
        cgDataRenderer = <div className="loading-wrapper"></div>
    } else {
        if (fixtures.status == 'failed') {
            cgDataRenderer = <div className='error-wrapper'>{fixtures.error}</div>
        }
        else {
            cgDataRenderer = fixtures.value.map((fixture) => {
                let fixtureKey = fixture.team1.shortName + fixture.team2.shortName;
                return <CurrentGameweekRow key={fixtureKey} {...fixture} fixtureKey={fixtureKey} />
            });

        }
    }

    return (
        <>
            <div className="current-gameweek-wrapper">
                {cgDataRenderer}
            </div>
            {fixtures.status != 'loading' && <SubmitPrediction />}
        </>
    );
}

export default CurrentGameweekList;
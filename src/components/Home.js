
import CurrentGameweekList from "./CurrentGameweekList";
import HomeTabs from "./HomeTabs";
import Account from "./Account";
import Results from "./Results";
import { useState } from "react";

function Home() {
    const [view, setView] = useState('games');

    const viewClickHandler = (view) => {
        setView(view);
    }
    return (
        <>
            <HomeTabs viewClickHandler={viewClickHandler} view={view} />
            {view == 'games' && <CurrentGameweekList />}
            {view == 'results' && <Results />}
            {view == 'account' && <Account />}
        </>
    );
}

export default Home;
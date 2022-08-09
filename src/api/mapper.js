

const teamImages = [
    { id: 1, imgId: 3 },
    { id: 2, imgId: 7 },
    { id: 3, imgId: 91 },
    { id: 4, imgId: 94 },
    { id: 5, imgId: 36 },
    { id: 6, imgId: 8 },
    { id: 7, imgId: 31 },
    { id: 8, imgId: 11 },
    { id: 9, imgId: 54 },
    { id: 10, imgId: 13 },
    { id: 11, imgId: 2 },
    { id: 12, imgId: 14 },
    { id: 13, imgId: 43 },
    { id: 14, imgId: 1 },
    { id: 15, imgId: 4 },
    { id: 16, imgId: 17 },
    { id: 17, imgId: 20 },
    { id: 18, imgId: 6 },
    { id: 19, imgId: 21 },
    { id: 20, imgId: 39 }
];

export const fixturesMapper = (fixtures) => {
    return fixtures.map(fixture => {
        let t1Data = {
            name: fixture.t1.name,
            shortName: fixture.t1.shortName,
            imgId: teamImages.filter(team => team.id == fixture.t1.id).map(team => team.imgId)[0]
        };
        let t2Data = {
            name: fixture.t2.name,
            shortName: fixture.t2.shortName,
            imgId: teamImages.filter(team => team.id == fixture.t2.id).map(team => team.imgId)[0]
        };
        return {
            team1: t1Data,
            team2: t2Data
        }
    });
}
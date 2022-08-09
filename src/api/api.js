import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db, auth } from '../firebase-config';
import { doc, getDoc } from "firebase/firestore";
import { fixturesMapper } from './mapper';


export const createUserApi = async ({ signupEmail, signupPassword, signupUsername }) => {
    const response = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    let { uid, email } = response.user;
    return { uid, email };
}

export const loginUserApi = async ({ loginEmail, loginPassword }) => {
    const response = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    let { uid, email } = response.user;
    return { uid, email };
}

export const logoutUserApi = async () => {
    const response = await signOut(auth);
    return {};
}


export const fetchFixturesApi = async () => {
    const gwRef = doc(db, "gameweeks", "gw01");
    const gwSnap = await getDoc(gwRef);

    let fixtures = fixturesMapper(gwSnap.data().fixtures)

    return fixtures;
}
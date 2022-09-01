import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore, collection,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCtxA5mYP0F--0YyPKPKrRrxv293F4CMEk",
authDomain: "crud-47480.firebaseapp.com",
projectId: "crud-47480",
storageBucket: "crud-47480.appspot.com",
messagingSenderId: "33468612391",
appId: "1:33468612391:web:01f919e07bfb4973fd3302",
measurementId: "G-5BLPRGFNHD"
};


initializeApp(firebaseConfig);

const db = getFirestore()

/**
 @param {string} title
 @param {string} description
 */
 export const saveTask = (title, description) =>
 addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
 onSnapshot(collection(db, "tasks"), callback);

/**
*
* @param {string} id 
*/
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
 updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
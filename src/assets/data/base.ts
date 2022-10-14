import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { ItemType } from "../../types/itemType";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB7mz3YJb9hNsh9SF2rSm-QEwEYMNlGu-Q",
    authDomain: "to-do-list-74d4f.firebaseapp.com",
    projectId: "to-do-list-74d4f",
    storageBucket: "to-do-list-74d4f.appspot.com",
    messagingSenderId: "849453312439",
    appId: "1:849453312439:web:fbef3825129f4d49aa6032",
    measurementId: "G-L8LVD4QB2X"
});


    export const api  = {   
        base: async () => {
            const db = getFirestore(firebaseApp);
            const listCollectionRef = collection(db, 'List')
        
            const datadoc = await getDocs(listCollectionRef);
            const data = datadoc.docs.map((doc) => ({...doc.data(), id: doc.id}));
            
            return data;
            },

        postData: async (name: string) => {
            const db = getFirestore(firebaseApp);
            const listCollectionRef = collection(db, 'List')

            const task = await addDoc(listCollectionRef, {
                name,
            });
        }
    }






    




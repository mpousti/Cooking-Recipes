import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useReducer } from "react"
import { db } from "../firebase/config"
import { INITIALCONNECT, connectReducer } from "../reducers/connectReducer"


export const useCollection = (c) => {
    const [state, dispatch] = useReducer(connectReducer, INITIALCONNECT)
    

    useEffect(() =>{
        dispatch({type: 'CONNECT_REQUEST'})
        let ref = collection(db, c)
        const unsub = onSnapshot(ref, (snapshot)=>{
            if (snapshot.empty) {
                dispatch({type: 'CONNECT_FAILURE', payload: 'No documents found'})
            } else {
                dispatch({type: 'CONNECT_SUCCESS', payload: snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))})
            }


        })
        return () => unsub()
         
      }, [c])
      return {state}

}
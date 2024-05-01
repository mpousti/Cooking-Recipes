import { useEffect, useReducer } from "react"
import { INITIALCONNECT, connectReducer } from "../reducers/connectReducer"
import { db } from "../firebase/config"
import { doc, onSnapshot } from "firebase/firestore"


export const useDoc = (c, id) => {
    const [state, dispatch] = useReducer(connectReducer, INITIALCONNECT)

    useEffect(() =>{
        dispatch({type: 'CONNECT_REQUEST'})
        let ref = doc(db, c, id)
        const unsub = onSnapshot(ref, (snapshot)=>{
            if (snapshot.empty){
                dispatch({type: 'CONNECT_FAILURE', payload: 'no recipe to load...'})
            } else {
                dispatch({type: 'CONNECT_SUCCESS', payload: snapshot.data()})
            }

        })
        return () => unsub()
  
    }, [c, id])
return { state }
}

import { useEffect, useState } from 'react'
import { firestore } from '../firebase/config'

const useItemList = () => {
    const [error, setError] = useState('')
    const [itemList, setItemList] = useState(null)

    // GET
    // useEffect(() => {
    //     firestore.collection('items').get()
    //     .then(res => {
    //         const list = []
    //         res.docs.forEach(doc => {
    //             list.push(doc.data())
    //         })
    //         setItemList(list)
    //     })
    //     .catch(error => {
    //         setError(error)
    //     })
    // }, [])

    // On Snapshot
    useEffect(() => {
        const unsubscribe = firestore.collection('items').onSnapshot(snapshot => {
            const list = []
            snapshot.docs.forEach(doc => {
                const item = {
                    id: doc.id,
                    ...doc.data()
                }
                list.push(item)
            })
            setItemList(list)
        })


        return () => unsubscribe()
    }, [])


    return [itemList, error]
}

export default useItemList
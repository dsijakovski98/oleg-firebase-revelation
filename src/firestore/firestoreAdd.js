import { firestore } from '../firebase/config'

export const addItemFirestore = async (item) => {
    firestore.collection('items').add(item)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
}
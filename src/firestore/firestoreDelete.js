import { firestore } from '../firebase/config'

export const deleteItemFirestore = (id) => {
    firestore.collection('items').doc(id).delete()
}

// update function - NE E ZA OVDE
// const updateItem = (id, newItem) => {
    // firestore.collection('items').doc(id).update(newItem)
// }
import React from 'react'
import { deleteItemFirestore } from './firestore/firestoreDelete'

function Item({item}) {
    const deleteItem = () => {
        deleteItemFirestore(item.id)
    }

    return (
        <div onClick={deleteItem} >
            {item.name}
        </div>
    )
}

export default Item

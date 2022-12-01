export const shorten = (title) =>{
    const spiletdTitle = title.split(" ");
    const newTitle= `${spiletdTitle[0]} ${spiletdTitle[1]}`;
    return newTitle;
}

export const isInCart = (state , id) => {
    const result = !!state.selectedItem.find(item => item.id === id);
    return result;
}

export const quantityCount = (state , id) => {
    const index = state.selectedItem.findIndex(item => item.id === id);
    if ( index === -1){
        return false;
    }else{
        return state.selectedItem[index].quantity;
    }
}
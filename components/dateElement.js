export default (date)=>{
    //! creamos estructa html
    const dateElement = document.createElement('li'); 
        dateElement.classList.add('date');
        dateElement.innerHTML = date;
    return dateElement
}
const Appetizer = (value) => {
    console.log(value)
    const appetizer = document.createElement('div');
    appetizer.setAttribute('class', 'container');

    const appetizerH2 = document.createElement('h2');
    appetizerH2.innerHTML = value;

    appetizer.appendChild(appetizerH2)
    return appetizer;
}

export default Appetizer;
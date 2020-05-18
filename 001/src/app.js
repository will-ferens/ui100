const monthsList = document.querySelector('#monthsDropdown');
const daysList = document.querySelector('#daysDropdown');
const yearsList = document.querySelector('#yearsDropdown');

const months = [
    {number: 1, name: 'January'}, 
    {number: 2, name: 'February'}, 
    {number: 3, name: 'March'}, 
    {number: 4, name: 'April'}, 
    {number: 5, name: 'May'}, 
    {number: 6, name: 'June'}, 
    {number: 7, name: 'July'}, 
    {number: 8, name: 'August'}, 
    {number: 9, name: 'September'}, 
    {number: 10, name: 'October'}, 
    {number: 11, name: 'November'}, 
    {number: 12, name: 'December'}
];

const dropdownBuilder = (element, data) => {
    data.forEach(item => {
        let li = document.createElement('li');
        
        li.classList.add('dropdown-item');
        li.innerHTML = item.name;
        
        element.appendChild(li);
    });
};

const dropdownOptions = () => {

};

const showDropdown = (element) => {
    let dropdownContainer = document.querySelector(element);

    if(dropdownContainer.classList.contains('show')) {
        dropdownContainer.classList.remove('show');
    } else {
        dropdownContainer.classList.add('show');
    }
};

dropdownBuilder(monthsList, months);
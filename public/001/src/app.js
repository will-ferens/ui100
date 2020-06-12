const monthsList = document.querySelector('#monthsDropdown');
const daysList = document.querySelector('#daysDropdown');
const yearsList = document.querySelector('#yearsDropdown');

const selectedDay = document.querySelector('#selected-day');
const selectedMonth = document.querySelector('#selected-month');
const selectedYear = document.querySelector('#selected-year');

let days = [];

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

const years = [2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980]

const getDaysInMonth = (month, year) => {
    let numberOfDays = new Date(year, month, 0).getDate();
    if(days.length) {
        days.splice(0, days.length)
    }
    buildDayArray(numberOfDays);
    if(daysList.firstChild) {
        daysList.innerHTML = '';
    }
    dropdownBuilder(daysList, days);
};

// while(daysList.firstChild) {
//     daysList.removeChild(daysList.lastChild);
// }
const selected = {
    month: { number: 11, name: 'November' },
    day: '24',
    year: '1991'
};



const buildDayArray = (value) => {
    for(let i = 0; i < value + 1; i++) {
        if(i !== 0) {
            days.push(i);
        }
    }
};





const changeSelected = (date, value, number) => {
    switch (date) {
        case 'month' :
            if (value) {
                selected.month.name = value;
                selected.month.number = number;
            } 
            selectedMonth.innerHTML = selected.month.name;
        break;
        case 'day' :
            if (value) selected.day = value;
            selectedDay.innerHTML = selected.day;
        break;
        case 'year' :
            if (value) selected.year = value;
            selectedYear.innerHTML = selected.year;
        break;
    }
};

changeSelected('month', 'November', 11);
changeSelected('day', '24');
changeSelected('year', '1991');


const dropdownBuilder = (element, data) => {
    data.forEach(item => {
        let li = document.createElement('li');
        
        li.classList.add('dropdown-item');
        
        if(item.name && item.number) {
            li.innerHTML = item.name;
            li.value = item.number;
        } else {
            li.innerHTML = item;
            li.value = item;
        }
        
        element.appendChild(li);
    });
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
dropdownBuilder(yearsList, years);

monthsList.addEventListener('click',
    (event) => {
        changeSelected('month', event.target.innerHTML, event.target.value);
        getDaysInMonth(selected.month.number, (selected.year * 1));
    },
    true
);

daysList.addEventListener('click',
    (event) => {
        changeSelected('day', event.target.value);
    },
    true
);

yearsList.addEventListener('click',
    (event) => {
        changeSelected('year', event.target.innerHTML);
        getDaysInMonth(selected.month.number, (selected.year * 1));
    }
)
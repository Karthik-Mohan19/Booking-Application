document.addEventListener('DOMContentLoaded', function() {
    const dayContainer = document.getElementById('currentDay');

    const dateContainer = document.getElementById('currentDate');
    
    

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDate = new Date();
    const dayName = daysOfWeek[currentDate.getDay()];
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0
    const year = currentDate.getFullYear();

    dayContainer.textContent = `${dayName}`

    dateContainer.value = `${year}-${day}-${month}`
    
});

// to open bookingform added one class with display block
let translateup = document.querySelector('.slots-container');

// to make slot go up
let bkingfrm = document.querySelector('.bookingform');

// for get current date
const today = new Date().toISOString().split('T')[0];
document.getElementById('today').value = today;

// this function is for open bookingform
function bookingform(time) {

    bkingfrm.classList.add('bkingfrmToShow');

    translateup.classList.add('slots-container-up');

    document.querySelector('.starttime').value = time;

    // first we split hour and minutes and make it number.added +1 in hours to show default value is +1 hour from selected hour
    let [starthour, minutes] = time.split(':').map(Number);
    let closetime = `${starthour + 1}:00`;

    let [endhour, endminutes] = closetime.split(':').map(Number);

    document.querySelector('.endtime').value = closetime;

    //to calculate the total amount
    let totalhours = endhour - starthour;
    let totalamount = totalhours * 800
    
    

    //to show total amount
    document.querySelector('.totalamount').innerHTML = `$${totalamount}` ;
    

}
function calculateValue() {
    let changevalue = document.querySelector('.endtime').value
    let clickhour = document.querySelector('.starttime').value

    let [starthour, minutes] = clickhour.split(':').map(Number);

    let [endhour, endminutes] = changevalue.split(':').map(Number);


    //to calculate the total amount
    let totalhours = endhour - starthour;
    let totalamount = totalhours * 800

    document.querySelector('.totalamount').innerHTML = `$${totalamount}` ;
    
    
    
    
}
function bkingfrmclose() {
    bkingfrm.classList.remove('bkingfrmToShow');
    translateup.classList.remove('slots-container-up');
}


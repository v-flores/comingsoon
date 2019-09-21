const countdown = document.querySelector('.countdown');

//Set Launch Date (ms)
const launchDate = new Date('Oct 6, 2020 16:38:00').getTime();

// Update Every Sec.

const intvl = setInterval(() => {
    // Get Todays date & time (ms)
    const now = new Date().getTime();

    //Distance from now to launch date
    const distance = launchDate - now;

   // Time calc 60 secs in an hour 60 mins in an hour 24 hours in a day
   const days = Math.floor(distance / (1000 * 60 * 60 * 24))
   const hours = Math.floor(distance % ((1000 * 60 * 60 * 24)) / (1000 *
    60 * 60));
   const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   //result
   countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
   `;

   // If launch date passed
   if(distance < 0 ) {
       // Stop countdown
       clearInterval(intvl);
       // Style & Output Text
       countdown.style.color = `#17a2b8`;
       countdown.innerHTML = `PRODUCT LAUNCHED! `
   }
}, 1000);
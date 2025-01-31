// let date = new Date();
// console.log(date);

// let mydate = new Date(2024, 0, 27);
// console.log(mydate);

// let strDate = new Date("2024-08-27");
// console.log("date",strDate);

// let timestamp = new Date(1706688000000);
// console.log(timestamp);

// //get time stamp
// console.log(Date.now());

// let today = new Date();
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getMonth());
// console.log(today.getDay());

// let newDate = new Date();
// newDate.setDate(12);
// newDate.setFullYear(2023);
// newDate.setMonth(2);
// console.log(newDate);
// console.log(newDate.getUTCDate());


//counter

function countdown(targetDate) {
    let target = new Date(targetDate).getTime();

    let interval = setInterval(() => {
        let now = Date.now();
        let diff = target - now;

        if (diff <= 0) {
            console.log("Time's up!");
            clearInterval(interval);
            return;
        }

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);

        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
}

countdown("2025-01-01"); // Countdown to New Year 2025 🎉



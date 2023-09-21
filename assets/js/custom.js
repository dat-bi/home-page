const d = new Date();

const monthsArr = Array.from({ length: 12 }, (e, i) => {
  return new Date(null, i + 1, null).toLocaleDateString("en", {
    month: "long",
  });
});

var date = d.getDate();
var dateString = date.toString();
var suffix = "";
if (date >= 11 && date <= 13) {
  suffix = "th";
} else {
  let lastDigit = date % 10; // lấy ra số cuối cùng của ngày
  switch (lastDigit) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  }
}

var daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = daysOfTheWeek[d.getDay()]; // Thứ dạng Monday
dateString += suffix; // ngày dạng 21st
let month = monthsArr[d.getMonth()]; // Tháng dạng March
let year = d.getFullYear();

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Đảm bảo phút luôn có hai chữ số
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;

  // Hiển thị thời gian trên trang web
  const timeElement = document.getElementById("clock"); // Thay 'clock' bằng id của phần tử hiển thị thời gian
  timeElement.textContent = `${hours}:${minutesDisplay}`;
}
function updateDate() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format và hiển thị thời gian trên trang web
  const timeElement = document.getElementById("date"); // Thay 'clock' bằng id của phần tử hiển thị thời gian
  timeElement.textContent = now.toLocaleString("en-US", options);
}

setInterval(updateClock, 1000);
// Gọi hàm updateClock mỗi giây
setInterval(updateDate, 1000);

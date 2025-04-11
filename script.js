const scores = {
    G1 : 0,
    G2 : 0,
    G4 : 0,
    G5 : 0,
    G6 : 0,
    G7 : 0,
    G8 : 0
}
let score;
const questions = [
    { question: "1 + 1 là bao nhiêu?", answer: "2" },
    { question: "Thủ đô của Việt Nam?", answer: "Hà Nội" },
    { question: "Màu cờ Việt Nam?", answer: "Đỏ và vàng" },
    { question: "2 + 2 bằng bao nhiêu?", answer: "4" },
    { question: "Trái Đất quay quanh gì?", answer: "Mặt Trời" },
    { question: "Môn thể thao vua là gì?", answer: "Bóng đá" },
    { question: "Loài vật nào là vua sơn lâm?", answer: "Sư tử" },
    { question: "Môn học tính toán là gì?", answer: "Toán học" },
    { question: "Ai là người phát minh ra bóng đèn?", answer: "Thomas Edison" },
    { question: "Số nguyên tố đầu tiên là?", answer: "2" },
    { question: "Cờ Việt Nam có mấy ngôi sao?", answer: "1" },
    { question: "Ngày Quốc Khánh Việt Nam?", answer: "2/9" },
    { question: "Chữ cái đầu tiên trong bảng chữ cái?", answer: "A" },
    { question: "3 x 3 bằng bao nhiêu?", answer: "9" },
    { question: "Màu của lá cây là gì?", answer: "Xanh lá" },
    { question: "5 + 5 = ?", answer: "10" },
    { question: "Hành tinh lớn nhất hệ Mặt Trời?", answer: "Sao Mộc" },
    { question: "Việt Nam nằm ở châu lục nào?", answer: "Châu Á" },
    { question: "Hà Nội thuộc miền nào của Việt Nam?", answer: "Miền Bắc" },
    { question: "Chim nào được gọi là vua tốc độ?", answer: "Chim ưng" },
    { question: "Người đầu tiên lên Mặt Trăng?", answer: "Neil Armstrong" },
    { question: "Tháng có ít ngày nhất?", answer: "Tháng 2" },
    { question: "Con vật kêu 'meo meo' là con gì?", answer: "Con mèo" },
    { question: "Mỗi giờ có bao nhiêu phút?", answer: "60" },
    { question: "Một ngày có bao nhiêu giờ?", answer: "24" },
    { question: "Số sau 99 là số nào?", answer: "100" },
    { question: "Tháng cuối cùng trong năm?", answer: "Tháng 12" },
    { question: "Thủ đô của Pháp?", answer: "Paris" },
    { question: "Ngôn ngữ chính của Việt Nam?", answer: "Tiếng Việt" },
    { question: "Nước nào có dân số đông nhất thế giới?", answer: "Trung Quốc" },
    { question: "Con gì có vòi dài?", answer: "Con voi" },
    { question: "Cây gì được gọi là vua của các loại quả?", answer: "Sầu riêng" },
    { question: "Nơi lạnh nhất Trái Đất là đâu?", answer: "Nam Cực" },
    { question: "Con người có bao nhiêu ngón tay?", answer: "10" },
    { question: "hello", answer: "10" }
  ];
  
  let currentQuestionIndex = 0;
  
  
document.querySelectorAll(".ques").forEach((el, index) => {
    el.addEventListener("click", () => {
        document.getElementById("clock").style.display = "block";
        document.getElementById("clock").textContent = "15";
        document.getElementById("clock").style.fontSize = "10rem";
        document.getElementById("clock").style.color = "white";
        const question = questions[index]?.question || "Chưa có câu hỏi ở đây!";
        const answer = questions[index]?.answer || "invalid";
        score = parseInt(el.textContent);
        document.getElementById("questionText").textContent = question;
        document.getElementById("popup").classList.remove("hidden");
        document.getElementById("answerText").style.display = "none";
        document.getElementById("line").style.display = "none";
        document.getElementById("answerText").textContent = answer;
        el.classList.add("disabled");
        el.style.pointerEvents = "none";
        el.style.opacity = "0.2";
    });
});
  

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
});
  
document.getElementById("showAnswerBtn").addEventListener('click', () => {

    document.getElementById("answerText").style.display = "flex";
    document.getElementById("line").style.display = "block";
    document.getElementById("clock").style.display = "none";
})

document.querySelectorAll(".group").forEach((el, index) => {
    el.addEventListener("click", () => {
        scores[el.textContent] += score;
        document.querySelector(".cur1").style.height = scores['G1'] + 'px';
        document.querySelector(".cur2").style.height = scores['G2'] + 'px';
        document.querySelector(".cur4").style.height = scores['G4'] + 'px';
        document.querySelector(".cur5").style.height = scores['G5'] + 'px';
        document.querySelector(".cur6").style.height = scores['G6'] + 'px';
        document.querySelector(".cur7").style.height = scores['G7'] + 'px';
        document.querySelector(".cur8").style.height = scores['G8'] + 'px';

        document.querySelector(".value1").textContent = scores['G1'];
        document.querySelector(".value2").textContent = scores['G2'];
        document.querySelector(".value4").textContent = scores['G4'];
        document.querySelector(".value5").textContent = scores['G5'];
        document.querySelector(".value6").textContent = scores['G6'];
        document.querySelector(".value7").textContent = scores['G7'];
        document.querySelector(".value8").textContent = scores['G8'];
        for (let key in scores) {
            console.log(`scores[${key}] = ${scores[key]}`);
        }
    });
});



let countdownInterval;

document.getElementById("startBtn").addEventListener("click", () => {
    let timeLeft = 15;
    const countdownEl = document.getElementById("clock");
    const tickSound = document.getElementById("tickSound");
    clearInterval(countdownInterval);

    countdownEl.textContent = timeLeft;
    countdownEl.style.color = "white";
    tickSound.play();
    countdownInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownEl.textContent = "Hết giờ!";
            countdownEl.style.color = "red";
            countdownEl.style.fontSize = "3rem";
            tickSound.pause();
            tickSound.currentTime = 0;
        } else {
            countdownEl.textContent = timeLeft;
            
        }
    }, 1000);
});
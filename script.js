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
    { question: "Quả bóng vàng (Ballon d'Or) năm 2023 được trao cho cầu thủ nào?", answer: "Lionel Messi", image: "", video: "" },
    { question: "Vận động viên người Việt Nam đầu tiên giành huy chương vàng tại Thế vận hội Olympic là ai?", answer: "Hoàng Xuân Vinh", image: "", video: "" },
    { question: "Một trận đấu bóng rổ chuyên nghiệp NBA có bao nhiêu hiệp đấu chính thức?", answer: "4 hiệp", image: "", video: "" },
    { question: "“Big Four” làng quần vợt đã làm mưa làm gió suốt hai thập kỷ qua. Roger Federer, Rafael Nadal, Novak Djokovic – vậy cái tên còn lại trong bộ tứ huyền thoại là ai?", answer: "Andy Murray", image: "", video: "" },
    { question: "Cuộc thi marathon đầu tiên trong lịch sử nhân loại được tổ chức ở quốc gia nào – nơi khai sinh ra tinh thần Olympic?", answer: "Hy Lạp", image: "", video: "" },
    { question: "Khi điều khiển xe máy tham gia giao thông cần phải có những loại giấy tờ gì?", answer: "Giấy phép lái xe (Bằng lái xe), Giấy đăng ký xe, Giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe", image: "", video: "" },
    { question: "Đây là biển báo gì?", answer: "Biển cấm vượt", image: "./images/6.jpg", video: "" },
    { question: "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?", answer: "5 mét", image: "", video: "" },
    { question: "Đây là biển gì?", answer: "Biển cấm xe gắn máy(khác xe máy)", image: "images/8.webp", video: "" },
    { question: "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?", answer: "7 → 8 → 9 → 1 → 2 → 3 → 6 → 4 → 5", image: "./images/10.png", video: "" },
    { question: "”Vội lạc vào giấc mơ nhẹ nhàng tựa ý thơ, Nụ cười người để anh nhớ để anh….”", answer: "mong đợi", image: "", video: "videos/11.mp4" },
    { question: "“Vẫn nhớ một mình em vì em xứng đáng, tận sâu tiềm thức anh yêu em…” ", answer: "luôn yêu em", image: "", video: "videos/12.mp4" },
    { question: "“Đến khẽ đến nhẹ nhàng, với một cô gái …”", answer: "chưa bao giờ yêu", image: "", video: "videos/13.mp4" },
    { question: "“Đợi chờ em trước nhà từ sáng đến trưa chiều tối mắc màn…”", answer: "đấy luôn", image: "", video: "videos/14.mp4" },
    { question: "“Đủ chật để nhìn nhau cho thật rõ, đủ tối để thấy khói kia…”", answer: "lửng lơ", image: "", video: "videos/15.mp4" },
    { question: "Bài thơ Lượm của nhà thơ nào?", answer: "Tố Hữu", image: "", video: "" },
    { question: "Nhà thơ nào được mệnh danh là 'ông hoàng thơ tình' của Việt Nam?", answer: "Xuân Diệu", image: "", video: "" },
    { question: "Tên gọi khác của 'Nhật ký trong tù' của Hồ Chí Minh?", answer: "Ngục trung nhật ký", image: "", video: "" },
    { question: "'Thôn Đoài ngồi nhớ thôn Đông, Một người chín nhớ mười mong một người.'Câu thơ trên sử dụng biện pháp nghệ thuật gì?", answer: "Câu thơ trên sử dụng biện pháp hoán dụ: lấy vật chứa đựng để gọi vật bị chứa đựng.", image: "", video: "" },
    { question: "Biện pháp tu từ được sử dung trong câu thơ 'Trơ cái hồng nhan với nước non'", answer: "Đảo ngữ, đảo động từ 'trơ' lên đầu câu để nhấn mạnh", image: "", video: "" },
    { question: "Món 'bánh chưng' truyền thống của Việt Nam thường được gói bằng loại lá gì?", answer: "Lá dong", image: "", video: "" },
    { question: "Quả nào chứa nhiều vitamin C nhất?", answer: "Quả ổi", image: "", video: "" },
    { question: "Đây là món gì?", answer: "Chả rươi", image: "./images/23.png", video: "" },
    { question: "Bánh gật gù là đặc sản nổi tiếng của tỉnh thành nào?", answer: "Quảng Ninh", image: "./images/24.png", video: "" },
    { question: "Đây là món gì?", answer: "Hoành Thánh", image: "./images/25.png", video: "" },
    { question: "Mỗi năm có bảy tháng 31 ngày. Đố bạn có bao nhiêu tháng có 28 ngày?", answer: "12 tháng", image: "", video: "" },
    { question: "n / u / N / l / c / ồ / g / ự", answer: "Nguồn lực", image: "", video: "" },
    { question: "Túi gì nghe tên tưởng ngọt, hoá ra đắng ngắt", answer: "Túi mật", image: "", video: "" },
    { question: "đêm / vút / dài / Đường / xe / vun", answer: "Đường dài vun vút xe đêm", image: "", video: "" },
    { question: "trong / nhà / đâu / Còn / vắng / quê / chiều / xa / bóng", answer: "Còn đâu bóng quê nhà trong chiều xa vắng", image: "", video: "" },
    { question: "Cực Bắc của Việt Nam thuộc tỉnh nào?", answer: "Hà Giang", image: "", video: "" },
    { question: "Dãy núi nào là ranh giới tự nhiên giữa miền Bắc và miền Trung Việt Nam?", answer: "Dãy Bạch Mã", image: "", video: "" },
    { question: "Tỉnh nào có đường bờ biển dài nhất Việt Nam?", answer: "Khánh Hòa", image: "", video: "" },
    { question: "Tỉnh nào có mật độ dân số thấp nhất cả nước?", answer: "Lai Châu", image: "", video: "" },
    { question: "Năm 2000 Việt Nam có bao nhiêu tỉnh thành?", answer: "61", image: "", video: "" }
  ];
  

  const cauhoiphu = [
    { question: "PTIT viết tắt cho gì?", answer: "Posts and Telecommunications Institute of Technology" },
    { question: "Trụ sở chính của Học viện Công nghệ Bưu chính Viễn Thông được đặt ở đường nào?", answer: "Đường Hoàng Quốc Việt" },
    { question: "Năm thành lập chính thức của Học viện Công nghệ Bưu chính Viễn thông là năm nào?", answer: "1997" },
    { question: "Tòa nhà giảng đường và hiệu bộ tại Cơ sở Ngọc Trục của PTIT cao bao nhiêu tầng?", answer: "13 tầng" },
    { question: "Năm nào PTIT chính thức được công nhận là trường đại học trọng điểm quốc gia trong lĩnh vực ICT?", answer: "2010" },
  ];
  
  let currentQuestionIndex = 0;
  
const imgEl = document.getElementById("questionImage");
const vidEl = document.getElementById("questionVideo");


document.querySelectorAll(".ques").forEach((el, index) => {
    el.addEventListener("click", () => {
        document.getElementById("clock").style.display = "block";
        document.getElementById("clock").textContent = "15";
        document.getElementById("clock").style.fontSize = "10rem";
        document.getElementById("clock").style.color = "white";
        

        if(questions[index]?.image || questions[index]?.video) {
            document.getElementById("clock").classList.add("has-media");
            document.getElementById("answerText").classList.add("has-media");
        }
        else {
            document.getElementById("clock").classList.remove("has-media");
            document.getElementById("answerText").classList.remove("has-media");
        }

        if (questions[index]?.image) {
            imgEl.src = questions[index].image;
            imgEl.style.display = "block";
        } else {
            imgEl.style.display = "none";
        }
        
        if (questions[index]?.video) {
            vidEl.src = questions[index].video;
            vidEl.style.display = "block";
        } else {
            vidEl.style.display = "none";
        }

        const question = questions[index]?.question || "Chưa có câu hỏi ở đây!";
        const answer = questions[index]?.answer || "invalid";
        score = parseInt(el.textContent);
        document.getElementById("questionText").textContent = question;
        document.getElementById("popup").classList.remove("hidden");
        document.getElementById("answerText").style.display = "none";
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








document.querySelectorAll(".topic").forEach((el, index) => {
    el.addEventListener("click", () => {
        document.getElementById("clock").style.display = "block";
        document.getElementById("clock").textContent = "15";
        document.getElementById("clock").style.fontSize = "10rem";
        document.getElementById("clock").style.color = "white";
        const question = cauhoiphu[index]?.question || "Chưa có câu hỏi ở đây!";
        const answer = cauhoiphu[index]?.answer || "invalid";
        score = (index+1)*10;
        document.getElementById("questionText").textContent = question;
        document.getElementById("popup").classList.remove("hidden");
        document.getElementById("answerText").style.display = "none";
        document.getElementById("answerText").textContent = answer;
    });
});
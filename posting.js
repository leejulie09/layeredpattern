const sendPostings = (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        username: "inabooks",
        postingType: "images",
        postingImages: [
          { id: 100, url: "http://image1.co.kr" },
          { id: 101, url: "http://image2.co.kr" },
        ],
        contents: "🎯정여울 작가의 글쓰기 수업 8기가 시작됩니다",
        likes: 100,
      },
      {
        id: 2,
        username: "linux.teach",
        postingType: "videos",
        postingImages: [
          { id: 105, url: "http://image3.co.kr" },
          { id: 106, url: "http://image4.co.kr" },
        ],
        contents: "Essential Apps for linux",
        likes: 703,
      },
      {
        id: 3,
        username: "caldigit_kr",
        postingType: "images",
        postingImages: [
          { id: 110, url: "http://image5.co.kr" },
          { id: 111, url: "http://image6.co.kr" },
        ],
        contents:
          "안녕하세요 🐼 칼디짓에서 앞으로 다양한 기술용어와 정보들을 쉽게 정리하여 카드뉴스로 업로드 하려합니다.",
        likes: 49,
      },
    ],
  });
};

module.exports = { sendPostings }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.

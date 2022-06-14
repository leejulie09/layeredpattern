const sendPostings2 = (req, res) => {
  res.json({
    data: {
      id: 2,
      username: "linux.teach",
      postingType: "videos",
      postingImages: [
        { id: 105, url: "http://image3.co.kr" },
        { id: 106, url: "http://image4.co.kr" },
      ],
      contents: "Essential Apps for linux",
      likes: 703,
      comments: [
        {
          id: 1000,
          comment: "I love this!",
          likes: 3,
        },
        {
          id: 1010,
          comment: "What is this?!",
          likes: 12,
        },
        {
          id: 1020,
          comment: "Have a nice day!",
          likes: 31,
        },
      ],
    },
  });
};

module.exports = { sendPostings2 }; // routing.js 에서 사용하기 위해 모듈로 내보낸다.

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
        contents: "π―μ μ¬μΈ μκ°μ κΈμ°κΈ° μμ 8κΈ°κ° μμλ©λλ€",
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
          "μλνμΈμ πΌ μΉΌλμ§μμ μμΌλ‘ λ€μν κΈ°μ μ©μ΄μ μ λ³΄λ€μ μ½κ² μ λ¦¬νμ¬ μΉ΄λλ΄μ€λ‘ μλ‘λ νλ €ν©λλ€.",
        likes: 49,
      },
    ],
  });
};

module.exports = { sendPostings }; // routing.js μμ μ¬μ©νκΈ° μν΄ λͺ¨λλ‘ λ΄λ³΄λΈλ€.

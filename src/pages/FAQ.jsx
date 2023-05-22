import React, { useState } from "react";

const FAQPage = () => {
  const faqData = [
    {
      question: "What is React.js?",
      answer:
        "React.js is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them based on changes to the application state.",
    },
    {
      question: "What is Bootstrap?",
      answer:
        "Bootstrap is a CSS framework that provides a collection of pre-styled components and responsive design utilities. It simplifies the process of building modern and visually appealing websites or web applications.",
    },
    {
      question: "What is Bootstrap?",
      answer:
        "Bootstrap is a CSS framework that provides a collection of pre-styled components and responsive design utilities. It simplifies the process of building modern and visually appealing websites or web applications.",
    },
    {
      question: "What is Bootstrap?",
      answer:
        "Bootstrap is a CSS framework that provides a collection of pre-styled components and responsive design utilities. It simplifies the process of building modern and visually appealing websites or web applications.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container faq-container">
      <h1 className="text-center m-5">Frequently Asked Questions</h1>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

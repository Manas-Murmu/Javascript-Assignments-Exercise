const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const faqs = [];

function showFaq() {
  let div = document.createElement("div");
  div.className = "accordian_body";

  faqData.forEach((e) => {
    let faqHeading = e.question;
    faqs.push(faqHeading);
  });

  for (let i = 0; i < faqs.length; i++) {
    const element = document.createElement("h3");
    element.className = "faq";
    element.innerText = faqs[i];
    div.appendChild(element);
    document.body.appendChild(div);
  }
}

showFaq();

console.log(faqs);

function createFaq() {}

function btnStatusUpdate() {}

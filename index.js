
function refreshPage(){
    window.location.reload();
} 

function getParagraphs(paragraphs, count) {
    const result = [];
  
    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * paragraphs.length);
      result.push(paragraphs[index]);
    }
  
    return result;
  }

  const adresee = [
    "Your Excellency",
    "Dear Minister",
    "Your Honor"
  ]

  const closingParagraph = [
"Once again, I extend my heartfelt congratulations on your achievement. I am confident that under your leadership, our nations will continue to grow closer and achieve great things together. Please accept, Excellency, the assurances of my highest consideration."
,
"In conclusion, I wish to express my sincere congratulations on your appointment. I am certain that your tenure will bring about positive changes and strengthen the bond between our nations. Please accept, Sir/Madam, the renewed assurances of my highest consideration."
,
"I am confident that your leadership will bring prosperity and peace to your people. I look forward to the continued friendship and cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
"I am certain that under your guidance, your country will continue to thrive and prosper. I look forward to working closely with you in the future. Please accept, Excellency, my heartfelt congratulations and the assurances of my highest consideration."
,
"I am confident that your leadership will bring about a new era of prosperity for your people. I look forward to the continued cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
"I am certain that your tenure will bring about positive changes and strengthen the bond between our nations. Please accept, Sir/Madam, the renewed assurances of my highest consideration."
,
"I am confident that your leadership will bring prosperity and peace to your people. I look forward to the continued friendship and cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
"I am certain that under your guidance, your country will continue to thrive and prosper. I look forward to working closely with you in the future. Please accept, Excellency, my heartfelt congratulations and the assurances of my highest consideration."
,
"I am confident that your leadership will bring about a new era of prosperity for your people. I look forward to the continued cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
"I am certain that your tenure will bring about positive changes and strengthen the bond between our nations. Please accept, Sir/Madam, the renewed assurances of my highest consideration."
,
 "I am confident that your leadership will bring prosperity and peace to your people. I look forward to the continued friendship and cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
 "I am certain that under your guidance, your country will continue to thrive and prosper. I look forward to working closely with you in the future. Please accept, Excellency, my heartfelt congratulations and the assurances of my highest consideration."
,
 "I am confident that your leadership will bring about a new era of prosperity for your people. I look forward to the continued cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
 "I am certain that your tenure will bring about positive changes and strengthen the bond between our nations. Please accept, Sir/Madam, the renewed assurances of my highest consideration."
,
 "I am confident that your leadership will bring prosperity and peace to your people. I look forward to the continued friendship and cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
 "I am certain that under your guidance, your country will continue to thrive and prosper. I look forward to working closely with you in the future. Please accept, Excellency, my heartfelt congratulations and the assurances of my highest consideration."
,
 "I am confident that your leadership will bring about a new era of prosperity for your people. I look forward to the continued cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
 "I am certain that your tenure will bring about positive changes and strengthen the bond between our nations. Please accept, Sir/Madam, the renewed assurances of my highest consideration."
,
 "I am confident that your leadership will bring prosperity and peace to your people. I look forward to the continued friendship and cooperation between our nations. Please accept, Excellency, my warmest congratulations and best wishes."
,
 "I am certain that under your guidance, your country will continue to thrive and prosper. I look forward to working closely with you in the future. Please accept, Excellency, my heartfelt congratulations and the assurances of my highest consideration."

  ];
  
  const paragraph2 = [
    "I've been keeping busy since the last time we talked. I recently started a new job at a tech startup, and things have been going really well so far.",
    'In my free time, I have also been taking some classes at the local community college.',
    "I've always been passionate about learning and I figured now was as good a time as any to pick up some new skills."
  ];
  
  const paragraph3 = [
    "How about you? What have you been up to?",
    "It's been so long that I'm sure you've accomplished some amazing things since we last spoke.",
    'Please fill me in on what I have missed.'
  ];
  
  const paragraph4 = [
    "I wanted to talk to you about something that's been on my mind lately.",
    'I feel like there is something we need to discuss, and I hope this letter can be an open and honest forum for us to do so.',
    'Please know that whatever it is we need to talk about, I approach it with kindness and respect for you and our relationship.'
  ];
  
  const introduction = [
"I am delighted to extend my warmest congratulations on the formation of your new cabinet. This is indeed a significant milestone in your country's political journey."
,
"It gives me great pleasure to congratulate you on the formation of your new cabinet. I am confident that this new team will bring about positive changes in your country."
,
"I am writing to express my heartfelt congratulations on the formation of your new cabinet. This is a testament to your leadership and the trust your people have in you."
,
"I am pleased to extend my warmest congratulations on the formation of your new cabinet. I am confident that under your leadership, your country will continue to thrive."
,
"It is with great pleasure that I congratulate you on the formation of your new cabinet. I am certain that this new team will work tirelessly for the betterment of your country."
,
"I am delighted to extend my sincere congratulations on the formation of your new cabinet. This is indeed a significant milestone in your country's political journey."
,
"It gives me immense pleasure to congratulate you on the formation of your new cabinet. I am confident that this new team will bring about positive changes in your country."
,
"I am writing to express my heartfelt congratulations on the formation of your new cabinet. This is a testament to your leadership and the trust your people have in you."
,
"I am pleased to extend my warmest congratulations on the formation of your new cabinet. I am confident that under your leadership, your country will continue to thrive."
,
"It is with great pleasure that I congratulate you on the formation of your new cabinet. I am certain that this new team will work tirelessly for the betterment of your country."
,
 "I am delighted to extend my sincere congratulations on the formation of your new cabinet. This is indeed a significant milestone in your country's political journey."
,
"It gives me immense pleasure to congratulate you on the formation of your new cabinet. I am confident that this new team will bring about positive changes in your country."
,
 "I am writing to express my heartfelt congratulations on the formation of your new cabinet. This is a testament to your leadership and the trust your people have in you."
,
"I am pleased to extend my warmest congratulations on the formation of your new cabinet. I am confident that under your leadership, your country will continue to thrive."
,
"It is with great pleasure that I congratulate you on the formation of your new cabinet. I am certain that this new team will work tirelessly for the betterment of your country."
,
"I am delighted to extend my sincere congratulations on the formation of your new cabinet. This is indeed a significant milestone in your country's political journey."
,
"It gives me immense pleasure to congratulate you on the formation of your new cabinet. I am confident that this new team will bring about positive changes in your country."
,
"I am writing to express my heartfelt congratulations on the formation of your new cabinet. This is a testament to your leadership and the trust your people have in you."
,
"I am pleased to extend my warmest congratulations on the formation of your new cabinet. I am confident that under your leadership, your country will continue to thrive."
,
"It is with great pleasure that I congratulate you on the formation of your new cabinet. I am certain that this new team will work tirelessly for the betterment of your country."

  ];



  function generateLetter(adresee, intro, para2, para3, para4, closing) {
    const letterBody = [
      ...getParagraphs(adresee,1),
      ...getParagraphs(intro,1),
      ...getParagraphs(para2, 1),
      ...getParagraphs(para3, 1),
      ...getParagraphs(para4, 1),
      ...getParagraphs(closing,1)
    ];
  
    const letterBodyElement = document.getElementById('letter-body');
    letterBodyElement.innerHTML = '';
  
    letterBody.forEach(paragraph => {
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = paragraph;
      letterBodyElement.appendChild(paragraphElement);
    });
  }
  
  // Example usage
  const adres = adresee;
  const intro = introduction;
  const para2 = paragraph2;
  const para3 = paragraph3;
  const para4 = paragraph4;
  const closing = closingParagraph;
  
  generateLetter(adresee,intro, para2, para3, para4, closingParagraph);

  
// const letterBody = [
//     ...introduction,
//     ...getParagraphs(paragraph2, 2), // Get two random paragraphs from the paragraph2 array
//     ...getParagraphs(paragraph3, 1), // Get one random paragraph from the paragraph3 array
//     ...getParagraphs(paragraph2, 1), // Get one random paragraph from the paragraph2 array
//     ...closingParagraph
//   ];
  
//   const letterBodyElement = document.getElementById('letter-body');
  
//   letterBody.forEach(paragraph => {
//     const paragraphElement = document.createElement('p');
//     paragraphElement.textContent = paragraph;
//     letterBodyElement.appendChild(paragraphElement);
//   });
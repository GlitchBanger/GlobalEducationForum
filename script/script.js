let entrepreneur = {
    title: 'Entrepreneurship',
    timings: '11:00am',
    keynote: 'Dr. Jacob Crasta',
    description: 'Entrepreneurship education is a key factor in developing entrepreneurial qualities in students. Entrepreneurship also has a potential of providing solution to the sustainable development challenges. It can be fostered through transforming the higher education systems and institutions at large. By transformation, we mean to create innovative and entrepreneurial learning experiences by developing a collaborative ecosystem of institutions. Entrepreneurship development could be made through a collective approach of the qualified individuals through these collaborations. Youth entrepreneurship has been recognised as one of the solutions which can address the unprecedented global youth unemployment challenge.',
    keyAddress: 'Importance of Entrepreneurship in development of Sustainable Development Goals.',
    panelist1: {
        name: 'John Doe',
        img: '../images/person11.webp'
    },
    panelist2: {
        name: 'McCarthy Malware',
        img: '../images/people12.jpg'
    },
    panelist3: {
        name: 'Snow White',
        img: '../images/people13.webp'
    },
    panelist4: {
        name: 'Johnny Hardboiled',
        img: '../images/people14.webp'
    },
    keynoteimg: '../images/keynote1.webp',
    moderator: 'John Snow',
    moderatorImg: '../images/people21.webp',
    keynoteDetails: 'How entrepreneurial cultures can be developed by HEIs?',
    panelistDetails: '<li>How HEIs can integrate entrepreneurial culture with organisational culture?</li><li>What is the role of HEIs to collaborate with industry for entrepreneurial development?</li><li>How HEIs can develop entrepreneurial qualities like leadership/ risk taking abilities amongst students?</li><li>Is entrepreneurship a personality trait or a acquired quality?</li><li>What kind of mind set and teaching methodologies to be adopted by teachers at HEIs for developing entrepreneurial qualities?</li><li>How HEIs can integrate experiential learning in the curriculum to create more entrepreneurs?</li>'
};

let wellbeing = {
    title: 'Well-being',
    timings: '2:00pm',
    keynote: 'Dr. Paul Salins',
    description: 'Wellbeing, as a positive outcome, is meaningful for youth and it results from holistic approaches towards social, physical, physiological, psychological, and mental aspects. Higher educational institutions can play a great role in developing the wellbeing among young adults. Wellbeing is increasingly conceptualized at institutional level in a collective form by the educational ecosystem. It can help the students in achieving personal and social goals as the wellbeing and learning outcomes have strong linkages. Teaching and learning systems, collaborations can be used as a measure to aware, create interest, and take action in this regard.',
    keyAddress: 'How important is wellbeing/holistic development in academia?',
    panelist1: {
        name: 'John Snow',
        img: '../images/people21.webp'
    },
    panelist2: {
        name: 'Carthy Virus',
        img: '../images/people22.jpg'
    },
    panelist3: {
        name: 'Snow Black',
        img: '../images/people23.jpg'
    },
    panelist4: {
        name: 'Egg Boiled',
        img: '../images/people24.jpeg'
    },
    keynoteimg: '../images/keynote2.jpg',
    moderator: 'John Doe',
    moderatorImg: '../images/person11.webp',
    keynoteDetails: 'What can HEI do to enable well-being of society?',
    panelistDetails: '<li>In what ways universities can actively participate in development of a well-being society?</li><li>What initiatives universities can take to improve social relationship and sustainable living?</li><li>What are the challenges that affect the mental health and well-being of higher education students?</li><li>How can HEIs enable the students to handle psychological problems such as depression, anxiety and stress?</li><li>How HEIs can address the work-life balance, job satisfaction, turn-over issues, happiness and personality development inside the academia setting?</li>'
};

let social = {
    title: 'Social Commitment',
    timings: '12:15pm',
    keynote: 'Dr. Subramanya',
    description: 'Higher educational teaching can play a central role in social change and increased social awareness among the students. HEIs can embark on innovations in teaching and learning to understand the social impact and support social engagement. Through this institutions can prepare leaders to respond to the real-life challenges and solving the socio-economic problem solving.',
    keyAddress: 'HEI’s as social change makers / creating awareness.',
    panelist1: {
        name: 'John Doe',
        img: '../images/person11.webp'
    },
    panelist2: {
        name: 'McCarthy Malware',
        img: '../images/people12.jpg'
    },
    panelist3: {
        name: 'Snow Black',
        img: '../images/people23.jpg'
    },
    panelist4: {
        name: 'Egg Boiled',
        img: '../images/people24.jpeg'
    },
    keynoteimg: '../images/keynote3.webp',
    moderator: 'Johnny Hardboiled',
    moderatorImg: '../images/people14.webp',
    keynoteDetails: 'How society and universities can operate in a more accountable, interconnected and collaborative manner to achieve SDG?',
    panelistDetails: '<li>What are the ways in which students can be motivated to face the real life challenges and socio-economic problems?</li><li>What are the techniques/models being practised to imbibe transformation of mindsets and developing social awareness?</li>'
};

let digitalisation = {
    title: 'Digitalization',
    timings: '3:25pm',
    keynote: 'Vice Chancellor',
    description: 'Digitalization is the engine of the fourth revolution called digital revolution. Digital transformation is an opportunity for higher education institutions to facilitate the access of education for students from different backgrounds. A transdisciplinary perspective of looking at the social, and entrepreneurial challenges can be taught and necessary skills can be imparted to find a feasible solution for such solutions. With rise of new technologies it is easy to create educational ecosystems by creating networks and sharing knowledge.',
    keyAddress: 'Enrichment of HEI through digitalization.',
    panelist1: {
        name: 'John Doe',
        img: '../images/people21.webp'
    },
    panelist2: {
        name: 'McCarthy Malware',
        img: '../images/people22.jpg'
    },
    panelist3: {
        name: 'Snow White',
        img: '../images/people13.webp'
    },
    panelist4: {
        name: 'Johnny Hardboiled',
        img: '../images/people14.webp'
    },
    keynoteimg: '../images/keynote4.webp',
    moderator: 'Egg Boiled',
    moderatorImg: '../images/people24.jpeg',
    keynoteDetails: 'What action need to be taken by universities on digitalization?',
    panelistDetails: '<li>What will be the role of universities with more and more edtechs and third party vendors on stage?</li><li>Due to digitalizationand third party vendors having primary role in education, will the principles of university be compromised?</li><li>How students can achieve personal and community goals with help of digitized learning process?</li><li>How HEIs can promote, motivate and impart lifelong learning among the students using digitized teaching and learning process?</li><li>What may be the future teaching and learning model and role of faculties in creating a students centred process?</li><li>How digitalization can empower HEIs and students both in creating a learning community?</li>'
};

let title = document.getElementById('title');
let keynote = document.getElementById('keynote');
let description = document.getElementById('event-description'); 
let entrepreneurship = document.getElementById('entrepreneurship');
let wellBeing = document.getElementById('well-being');
let socialImpact = document.getElementById('social');
let digital = document.getElementById('digitization'); 
let panelist1 = document.getElementById('panelist1');
let panelist2 = document.getElementById('panelist2');
let panelist3 = document.getElementById('panelist3');
let panelist4 = document.getElementById('panelist4')
let keynoteSpeaker = document.getElementById('keynote-person');
let panelistName = document.getElementById('panelist-name');
let panelistImg = document.getElementById('panelist-img');
let mediator = document.getElementById('mediator');
let mediatorImg = document.getElementById('mediator-img');
let keynoteDetails = document.getElementById('keynote-details');
let keyAddress = document.getElementById('key-address');
let panelistDetails = document.getElementById('pannelist-details');

let selectedButton = entrepreneurship;
let currentObject = entrepreneur;
let selectedPanelist = panelist1;

function changeDetails(object) {
    title.innerHTML = object.title;
    keynote.innerHTML = object.keynote;
    description.innerHTML = object.description;
    keynoteDetails.innerHTML = object.keynoteDetails;
    keyAddress.innerHTML = object.keyAddress;
    panelistDetails.innerHTML = object.panelistDetails;
    panelist1.src = object.panelist1.img;
    panelist2.src = object.panelist2.img;
    panelist3.src = object.panelist3.img;
    panelist4.src = object.panelist4.img;
    keynoteSpeaker.src = object.keynoteimg;
    panelistName.innerHTML = object.panelist1.name;
    panelistImg.src = object.panelist1.img;
    mediator.innerHTML = object.moderator;
    mediatorImg.src = object.moderatorImg;
    currentObject = object;
    selectedPanelist.parentElement.classList.remove('selected');
    panelist1.parentElement.classList.add('selected');
    selectedPanelist = panelist1;
}

entrepreneurship.onclick = () => {
    selectedButton.classList.remove('selected-button');
    entrepreneurship.classList.add('selected-button');
    selectedButton = entrepreneurship;
    changeDetails(entrepreneur);
};

wellBeing.onclick = () => {
    selectedButton.classList.remove('selected-button');
    wellBeing.classList.add('selected-button');
    selectedButton = wellBeing;
    changeDetails(wellbeing);
};

socialImpact.onclick = () => {
    selectedButton.classList.remove('selected-button');
    socialImpact.classList.add('selected-button');
    selectedButton = socialImpact;
    changeDetails(social);
};

digital.onclick = () => {
    selectedButton.classList.remove('selected-button');
    digital.classList.add('selected-button');
    selectedButton = digital;
    changeDetails(digitalisation);
}

panelist1.onclick = () => {
    panelistImg.src = currentObject.panelist1.img;
    panelistName.innerHTML = currentObject.panelist1.name;
    selectedPanelist.parentElement.classList.remove('selected');
    panelist1.parentElement.classList.add('selected');
    selectedPanelist = panelist1;
};

panelist2.onclick = () => {
    panelistImg.src = currentObject.panelist2.img;
    panelistName.innerHTML = currentObject.panelist2.name;
    selectedPanelist.parentElement.classList.remove('selected');
    panelist2.parentElement.classList.add('selected');
    selectedPanelist = panelist2;
};

panelist3.onclick = () => {
    panelistImg.src = currentObject.panelist3.img;
    panelistName.innerHTML = currentObject.panelist3.name;
    selectedPanelist.parentElement.classList.remove('selected');
    panelist3.parentElement.classList.add('selected');
    selectedPanelist = panelist3;
};

panelist4.onclick = () => {
    panelistImg.src = currentObject.panelist4.img;
    panelistName.innerHTML = currentObject.panelist4.name;
    selectedPanelist.parentElement.classList.remove('selected');
    panelist4.parentElement.classList.add('selected');
    selectedPanelist = panelist4;
};



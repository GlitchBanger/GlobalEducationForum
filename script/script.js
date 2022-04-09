let entrepreneur = {
    title: 'ENTREPRENEURSHIP',
    timings: '11:00am',
    keynote: 'Dr. Jacob Crasta',
    description: 'Entrepreneurship education is a key factor in developing entrepreneurial qualities in students. Entrepreneurship also has a potential of providing solution to the sustainable development challenges. It can be fostered through transforming the higher education systems and institutions at large. By transformation, we mean to create innovative and entrepreneurial learning experiences by developing a collaborative ecosystem of institutions. Entrepreneurship development could be made through a collective approach of the qualified individuals through these collaborations. Youth entrepreneurship has been recognised as one of the solutions which can address the unprecedented global youth unemployment challenge.'
};

let wellbeing = {
    title: 'WELL-BEING',
    timings: '2:00pm',
    keynote: 'Dr. Paul Salins',
    description: 'Wellbeing, as a positive outcome, is meaningful for youth and it results from holistic approaches towards social, physical, physiological, psychological, and mental aspects. Higher educational institutions can play a great role in developing the wellbeing among young adults. Wellbeing is increasingly conceptualized at institutional level in a collective form by the educational ecosystem. It can help the students in achieving personal and social goals as the wellbeing and learning outcomes have strong linkages. Teaching and learning systems, collaborations can be used as a measure to aware, create interest, and take action in this regard.'
};

let social = {
    title: 'SOCIAL COMMITMENT',
    timings: '12:15pm',
    keynote: 'Dr. Subramanya',
    description: 'Higher educational teaching can play a central role in social change and increased social awareness among the students. HEIs can embark on innovations in teaching and learning to understand the social impact and support social engagement. Through this institutions can prepare leaders to respond to the real-life challenges and solving the socio-economic problem solving.'
};

let digitalisation = {
    title: 'DIGITALIZATION',
    timings: '3:25pm',
    keynote: 'Vice Chancellor',
    description: 'Digitalization is the engine of the fourth revolution called digital revolution. Digital transformation is an opportunity for higher education institutions to facilitate the access of education for students from different backgrounds. A transdisciplinary perspective of looking at the social, and entrepreneurial challenges can be taught and necessary skills can be imparted to find a feasible solution for such solutions. With rise of new technologies it is easy to create educational ecosystems by creating networks and sharing knowledge.'
};

let title = document.getElementById('title');
let timings = document.getElementById('timings');
let keynote = document.getElementById('keynote');
let description = document.getElementById('event-description'); 
let entrepreneurship = document.getElementById('entrepreneurship');
let wellBeing = document.getElementById('well-being');
let socialImpact = document.getElementById('social');
let digital = document.getElementById('digitization'); 

let selectedButton = entrepreneurship;

function changeDetails(object) {
    title.innerHTML = object.title;
    timings.innerHTML = object.timings;
    keynote.innerHTML = object.keynote;
    description.innerHTML = object.description;
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
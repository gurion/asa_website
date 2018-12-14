$(document).ready(function(){


    var options = {
      valueNames: [ 'name', 'year', 'school', 'major', 'profilePic', ],
      item: 'user-item'
    };

    var values = [
      {
        name: 'Leena Aurora',
        year: 2019,
        position: 'Director of Alumni Events',
        school: 'KSAS',
        major: 'Public Health',
        summary: "Leena is a Public Health major from Lynnfield, Massachusetts. She has been dancing since the age of six, and is a member of JHU Shakti, Hopkins' Indian Classical dance team. She also volunteers with Thread, and is a member of Phi Mu. She is the co-founder and Chief Curriculum Development Officer for Yesplus at JHU, which aims to promote positive mental wellbeing to the Hopkins community as well as surrounding communities in Baltimore. She also does research with Dr. Tonia Poteat at the Bloomberg School of Public Health, primarily studying HIV and other under-studied issues amongst transgender populations.",
        profilePic: 'img/Leena.Aurora.jpg'
      },
      {
        name: 'Aaron Pultman',
        year: 2019,
        school: 'KSAS',
        major: 'International Studies',
        summary: 'Aaron is an International Studies major from Teaneck, New Jersey. He is a member of the Hopkins Interfaith Council and is the Vice President of the Hopkins Jewish Students Association. He is also the Vice President of the Hopkins College Democrats and likes to play squash in his free time.',
        profilePic: 'img/aaron.pultman.jpg'
      },
      {
        name: 'Gurion Marks',
        year: 2019,
        school: 'KSAS, WSE',
        major: 'Neuroscience; Computer Science',
        summary: 'Gurion is a Neuroscience and Computer Science major from New York City. He is an avid ice hockey player, competing on Hopkins’ club ice hockey team. Gurion studies scene processing at the Dynamic Perception Lab, and is an active member of Thread. When he’s not at the rink or in the lab, you’ll probably find him playing guitar or saxophone, or making his own pasta from scratch!',
        profilePic: 'img/Gurion.Marks.jpg'
      },
      {
        name: 'Haldo Treviño II',
        year: 2018,
        school: 'KSAS',
        major: 'Neuroscience',
        summary: 'Haldo is a neuroscience major from the Rio Grande Valley located in South Texas. He is a Gates Millennium Scholar, research assistant in the Brain Tumor Stem Cell Lab at the medical campus and a Johns Hopkins Underrepresented in Medicine Program mentor. Outside of academics, he enjoys painting and drawing with various mediums, particularly oil on canvas.',
        profilePic: 'img/Haldo.Trevino.jpg'
      },
      {
        name: 'Alina Andrews',
        year: 2019,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: 'Alina is a Biomedical Engineering major and an Africana Studies minor from Miami, FL. She is a part of the JUMP and Hop-In programs through the Office of Multicultural Affairs.  She also has a passion for travel and has studied abroad and traveled to Brazil, England, Scotland, and France. Alina hopes to combine both her academic and travel interests to start a career in Global Medicine.',
        profilePic: 'img/alina.andrews.jpg'
      },
      {
        name: 'Aliza Berger',
        year: 2019,
        school: 'KSAS',
        major: 'International Studies',
        summary: ' ',
        profilePic: 'img/placeholder.png'
      },
      {
        name: 'Anthony Garay',
        year: 2019,
        school: 'WSE',
        major: 'Computer Engineering',
        summary: 'Anthony is a Computer Engineering major and Entrepreneurship & Management minor from New York. In addition to being an Alumni Student Ambassador, he serves as a Senior Advisor for TEDxJHU and is the Co-Founder of TCO Labs, Inc., a 501(c)(3) student-run non-profit on a mission to foster entrepreneurship on campus. He’s also a foodie, car enthusiast, techie, avid traveler, and dog lover (he has a Golden Retriever named Regal, who is spoiled rotten).',
        profilePic: 'img/Anthony.Garay.jpg'
      },
      {
        name: 'Corine Peifer',
        year: 2019,
        school: 'KSAS',
        major: 'Public Health',
        summary: 'Corine is a Public Health Studies major from Scranton, Pennsylvania. Minoring in Social Policy and Entrepreneurship & Management, she plans on pursuing a career in health policy and management. She is a member of Pi Beta Phi and Eclectics Dance, while she also holds an executive board position within the Hopkins Organization for Programming (HOP), the Hoptoberfest planning board, and the Panhellenic Association at Johns Hopkins (PAJH).',
        profilePic: 'img/placeholder.png'
      },
      {
        name: 'Paige Frank',
        year: 2019,
        school: 'WSE',
        major: 'Biomedical Engineering; Computer Science',
        summary: 'Paige is a biomedical engineering and computer science student from Minnesota. While not volunteering for ASA, she spends her time tutoring Baltimore public school students through Reading Partners, serving as editor of the JHU News-letter, and TAing a freshman lab course. She is also a member of Alpha Phi and the Biomedical Engineering Society.',
        profilePic: 'img/paige_frank.jpg'
      },
      {
        name: 'Shravya Gogula',
        year: 2019,
        school: 'WSE',
        major: 'Biomedical Engineering',
        summary: 'Shravya is a junior Biomedical Engineering Major and Spanish Minor on the Pre-Med track from Chicago, Illinois. She holds a position as the Committee Chair on the Biomedical Engineering Society board, and is a head volunteer for the Adult Emergency Department volunteer program that takes place at the Johns Hopkins Hospital. Shravya is also on the planning committee for MedHacks, a volunteer through Charm City Science League, a member of Kappa Kappa Gamma, and is currently doing research in a tissue engineering lab.',
        profilePic: 'img/shravya_gogula.jpg'
      },
      {
        name: 'Teja Rao',
        year: 2019,
        school: 'KSAS',
        major: 'Molecular and Cellular Biology',
        summary: 'Teja is a Molecular and Cellular Biology major with minors in Economics and Applied Mathematics and Statistics on the Pre-Med track from Westford, Massachusetts. In addition to being an Alumni Student Ambassador, Teja is on the leadership committee for MedHacks, the nation\'s premier healthcare hackathon, serves as a Resident Advisor for a freshman dorm, and is involved in research at the Hopkins medical school as well as volunteer efforts in the city of Baltimore. In his spare time, he can be found playing basketball, reading the Game of Thrones books and watching the show, or working on his cooking skills.',
        profilePic: 'img/Teja_Rao.jpg'
      },
      {
        name: 'Ashley Wax',
        year: 2020,
        school: 'KSAS',
        major: 'International Studies; Sociology; Spanish',
        summary: 'Ashley is a triple major in International Studies, Sociology, and Spanish. She is the assistant music director of the Sirens, JHU\'s all-female a cappella group, in addition to serving as a tutor through the Tutorial Project. She also acts as a mentor to first-year students through the Mentoring Assistance Peer Program (MAPP).',
        profilePic: 'img/Ashley_Wax.jpg'
      },
      {
        name: 'Cecilia Vorfeld',
        year: 2020,
        school: 'KSAS',
        major: 'Medicine, Science, and the Humanities; Public Health',
        summary: 'Cecilia is a Medicine, Science and Humanities (MSH) with Public Health double major, plus a minor in Italian  from Geneva, Switzerland. She currently is a member of the Kappa Alpha Theta sorority on campus and part of its Member Development Committee. Cecilia has also just completed her training for A Place To Talk, a peer-to-peer listening group on campus and looks forward to putting her new skills to use in her sophomore year, where she will begin as a First Year Mentor to the incoming freshmen.',
        profilePic: 'img/cecilia.vorfeld.jpg'
      },
      {
        name: 'Elena Hughes',
        year: 2020,
        school: 'KSAS',
        major: 'Neuroscience; Internation Studies',
        summary: 'Elena is a Neuroscience major from Connecticut.  Her primary interest is traveling the world and documenting the different cultures, peoples, and societies she encounters. Having already traveled to 36, she hopes to one day visit all 195 countries. If you can\'t find Elena in the library memorizing neural pathways or at Bayview Medical Center analyzing data related to sleep disorders, you will probably find her training to run her first marathon.',
        profilePic: 'img/Elena_Hughes.jpg'
      },
      {
        name: 'Josh Russo',
        year: 2020,
        school: 'WSE',
        major: 'Computer Science; Applied Mathematics and Statistics',
        summary: 'Josh is a Computer Science and AMS major from Brookline, Massachusetts. He has been playing ice hockey since he was four years old and continues to play on the Hopkins club team. Josh is also a member of Phi Kappa Psi and loves finding the best places to eat around Baltimore.',
        profilePic: 'img/josh_russo.jpg'
      },
      {
        name: 'William Glass',
        year: 2020,
        school: 'WSE',
        major: 'Engineering Mechanics; Economics',
        summary: 'Will is a double major in engineering mechanics and economics from sunny Miami, Florida. Besides being an Alumni Student Ambassador, Will tutors Baltimore middle school scholars as part of the Baltimore Robotics Institute and will engage with the Hopkins music scene as a classical and jazz clarinet and saxophone player. He can frequently be found around campus practicing his photography.',
        profilePic: 'img/William_Glass.jpg'
      }
    ];

    var userList = new List('user-list', options, values);
    //
    //userList.add({
    //  name: "Gustaf Lindqvist",
    //  born: 1983
    //});



    $('.more_info').click(function() {
//        $('.more_info').removeClass('active')
        $(this).toggleClass('active');
    });
});

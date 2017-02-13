var bio = {
    "name": "Shivani Narang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "886-121-4572",
        "email": "shivanisnarang@gmail.com",
        "github": "snarang",
        "twitter": "@snarang",
        "location": "Bangalore",
    },
    "welcomeMessage": " Welcome to my Resume!",
    "skills": ["Hard Working", "Postive Attitude", "Team Player", "Optimist"],
    "biopic": "images/a3.jpg",
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedLocation);

    $('#header').append(formattedwelcomeMsg);
    bio.skills.forEach(function(skill) {
        console.log(skill);
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var education = {
    "schools": [{
            "name": "NIT",
            "location": "Punjab, India",
            "degree": "Masters of Technology",
            "majors": ["EC"],
            "dates": "2008",
            "url": "http://www.nitj.ac.in/"
        },
        {
            "name": "Guru Nanak Dev University",
            "location": "Punjab, India",
            "degree": "Bachelor of Technology",
            "majors": ["EC"],
            "dates": "2006",
            "url": "http://web.gndu.ac.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front_End_Development_Course",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://in.udacity.com/"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedDegree);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    for (i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineCourse + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDate);
        $(".education-entry:last").append(formattedOnlineURL);
    }

}
education.display();

var work = {
    "jobs": [{
            "employer": "Rentsher",
            "title": "Web Developer",
            "location": "Bangalore",
            "dates": "2016",
            "description": "RentSher is online product rentals marketplace. It provides all home, office, event rental requirements delivered at your doorstep with assured quality and guarantee on the products. The products are provided by other people and vendors, but selected and curated by our dedicated team. RentSher is a leader in online costumes for rent especially for children, or for specific requirements like dance, superheroes, professional costumes and more."
        },
        {
            "employer": "Capgemini",
            "title": "Consultant",
            "location": "Mumbai",
            "dates": "2008",
            "description": "Capgemini Consulting teams design winning strategies by harnessing the power of the new digital economy and deliver value and performance through the mastery of digital advances, information insight and business transformation."
        }
    ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display()

var projects = {
    "projects": [{
            "title": "Building an ecommerce platform to perform peer to peer online rental for Rentsher",
            "dates": "2016",
            "description": "Built online platform using Bootstrap and angularjs",
            "images": ["images/delhi.jpg", "images/yoga.png"]
        },
        {
            "title": "CareerMyles",
            "dates": "2016",
            "description": "Built HR Recruitment webpage using Bootstrap framework",
            "images": ["images/careermyles.png", "images/docsapp.png"]
        }
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var image = 0; image < projects.projects[i].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);
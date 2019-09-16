var exp = {
    experience: [
        { id: "QT", title: "Quorate Technology Intern", date: "June 2019 - August 2019", description: "Worked on a demo for the company's speech-to-text technology, making the text searchable using AWS Elasticsearch and adding metadata with NLP through the spaCy Python library. The demo was used in various presentations and contributed to bringing in multiple clients for to the company." },
        { id: "GS", title: "Goldman Sachs Spring Intern", date: "April 2019", description: "Learned about the various teams within the Compliance Tech pipeline and presented a team project based around suggesting improvements to the pipleine and their use of Big Data." },
        { id: "HTBV", title: "Hack the Burgh V", date: "March 2019", description: "Winner of best use of Edinburgh Festivals API. Worked in a team of 4 to build an app for finding shows during Edinburgh festivals using the Edinburgh Festivals API and Dart." },
        { id: "XP", title: "Extreme PALS Organizer", date: "March 2019", description: "Organized and was a mentor in an introductory hackathon aimed at 1st year university students in a team. The participants were provided with a 2D platformer game framework in Java. The teams were helped by mentors to add customized functionality and graphics to the game." },
        { id: "INFP", title: "InfPALS Leader", date: "September 2018 - March 2019", description: "Taught computer science concepts to 1st years, helping with their modules by organizing weekly sessions." },
        { id: "AEI", title: "Amazon Spring Program Attendee", date: "April 2018", description: "Built an Alexa Skill game, which read lyrics of a song to the player and asked the player to complete them. Worked in a team of 4, supervised by senior Amazon engineers." },
        { id: "SWE", title: "Skyscanner Work Experience", date: "October 2016", description: "Learned about how the Collaborative Tools team enhanced workflows and internal applications. Built a web app that suggested holiday destinations for the user." },
        { id: "OB", title: "Outbox Incubator Attendee", date: "June 2015 - August 2015", description: "Took part in this summer tech program for girls interested in STEM and business. While there, built a Python application that allowed users to decide what meals to make based on dietary requirements and available ingredients." }
    ]
};

var exp_template =
    "{{#experience}}" +
    "<div>" +
    "<button onclick=\"openCloseCollapse(this);\" id=\"{{id}}\" class=\"collapsible\">" +
    "<h3 class=\"title\">{{title}}<span " +
    "style=\"margin-left: 2em;\">{{date}}</span></h6>" +
    "</button>" +
    "<div class=\"collapsible-content\">" +
    "<h6 class=\"description-alt\">{{description}}" +
    "</h6>" +
    "</div>" +
    "</div>" +
    "{{/experience}}"

var exp_text = Mustache.render(exp_template, exp);

$("#experience").html(exp_text);

function myFunc(id) {
    console.log(id);
}

var lan = {
    languages: [
        { language: "Python" },
        { language: "Java" },
        { language: "Haskell" },
        { language: "CSS" },
        { language: "HTML" },
        { language: "Javascript" },
        { language: "C" },
        { language: "MIPS" }
    ],
    frameworks: [
        { framework: "Flask" },
        { framework: "FlaskAsk" },
        { framework: "Bootstrap" }
    ]
};

var lan_template =
    "{{#languages}}" +
    "<div>" +
    "<p class=\"description\" style=\"text-align:center\">{{language}}</p>" +
    "</div>" +
    "{{/languages}}";

var fram_template =
    "{{#frameworks}}" +
    "<div>" +
    "<p class=\"description\" style=\"text-align:center\">{{framework}}</p>" +
    "</div>" +
    "{{/frameworks}}";

var lan_text = Mustache.render(lan_template, lan);

var fram_text = Mustache.render(fram_template, lan);

$("#language").html(lan_text);

$("#frameworks").html(fram_text);


var mod = {
    modules: [
        { module: "Algorithms, Data Structures and Learning" },
        { module: "Formal and Natural Language Processing" },
        { module: "Software Engineering" },
        { module: "Computer Systems" },
        { module: "Reasoning and Agents" },
        { module: "Linear Algebra" },
        { module: "Probability with Applications" },
        { module: "Calculus and its Applications" },
        { module: "Discrete Mathematics and Reasoning" },
        { module: "Data and Analysis" }
    ]
};

var modules_template =
    "{{#modules}}" +
    "<div style=\"padding: 1% 1% 1% 15%\">" +
    "<p class=\"description-alt\">{{module}}</p>" +
    "</div>" +
    "{{/modules}}";

var modules_text = Mustache.render(modules_template, mod);

$("#modules").html(modules_text);

function openCloseCollapse(coll) {
    console.log(coll);
    coll.classList.toggle("active");
    var content = coll.nextElementSibling;
    content.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

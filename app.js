var exp = {
    experience: [
        { id: "AMZN", title: "Amazon Software Engineering Intern", date: "June 2020 - September 2020", description: "Designed and developed debugging tools for the Dynamic Advertising Team, reducing the debugging and analysis times for certain issues from days to minutes. Used Java and AWS Kinesis to enable a data stream for the tool, and AWS CDK for developing infrastructure with code." },
        { id: "HTBVI", title: "Hack the Burgh VI", date: "March 2020", description: "Winner of the Hack Edinburgh Tourism challenge. Developed a web-app that gamified tourism by generating a random scavenger hunt of Edinburgh for the user to follow. Built using Python and Django." },
        { id: "QT", title: "Quorate Technology Intern", date: "June 2019 - August 2019", description: "Created a new demo for the company’s speech-to-text technology to demonstrate the value of converting audio to text and to exhibit the high quality of text from the company’s technology. Learned about how the company processes audio from the pipeline to the machine learning techniques used. Used AWS Elasticsearch for quick searching and further text analysis with Kibana for visualisations, the spaCy NLP library to apply further natural language processing techniques to the text and scripts written in Python." },
        { id: "GS", title: "Goldman Sachs Spring Intern", date: "April 2019", description: "Learned about the various teams within the Compliance Tech pipeline and presented a team project based around suggesting improvements to the pipleine and their use of Big Data." },
        { id: "HTBV", title: "Hack the Burgh V", date: "March 2019", description: "Winner of best use of Edinburgh Festivals API. Worked in a team of 4 to build an app for finding shows during Edinburgh festivals using the Edinburgh Festivals API and Dart." },
        { id: "XP", title: "Extreme PALS Organizer", date: "March 2019", description: "Organized and was a mentor in an introductory hackathon aimed at 1st year university students in a team. The participants were provided with a 2D platformer game framework in Java. The teams were helped by mentors to add customized functionality and graphics to the game." },
        { id: "INFP", title: "InfPALS Leader", date: "September 2018 - March 2019", description: "Taught computer science concepts to 1st years, helping with their modules by organizing weekly sessions." },
        { id: "AEI", title: "Amazon Early Insights Attendee", date: "April 2018", description: "Built an Alexa Skill game, which read lyrics of a song to the player and asked the player to complete them. Worked in a team of 4, supervised by senior Amazon engineers." },
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
        { language: "JavaScript" },
        { language: "Typescript" },
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
        { module: "Foundations of Natural Language Processing" },
        { module: "Software Engineering" },
        { module: "Operating Systems" },
        { module: "Introduction to Databases" },
        { module: "Speech Processing" },
        { module: "Computer Systems" },
        { module: "Linear Algebra" },
        { module: "Discrete Mathematics and Reasoning" }
    ]
};

var modules_template =
    "{{#modules}}" +
    "<div style=\"padding: 1% 1% 1% 12%\">" +
    "<p class=\"description-alt\">{{module}}</p>" +
    "</div>" +
    "{{/modules}}";

var modules_text = Mustache.render(modules_template, mod);

$("#modules").html(modules_text);

function openCloseCollapse(coll) {
    coll.classList.toggle("active");
    var content = coll.nextElementSibling;
    content.classList.toggle("active");
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function expandAll(button) {
    var colls = document.getElementsByClassName("collapsible");
    button.classList.toggle("active");
    var expand = button.classList.contains("active");
    if (button.classList.contains("active")) {
        button.innerHTML = "Close All";
    } else {
        button.innerHTML = "Expand All";
    }

    [].forEach.call(colls, function (el) {
        if (expand && !el.classList.contains("active")) {
            openCloseCollapse(el);
        } else if (!expand && el.classList.contains("active")) {
            openCloseCollapse(el);
        }
    });
}


/* Set the width of the side navigation to 250px */
function openNav() {
    var width = "250px";

    if (window.innerWidth <= 800 && window.innerHeight <= 750) {
        width = "200px";
    }
    document.getElementById("sidenav").style.width = width;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

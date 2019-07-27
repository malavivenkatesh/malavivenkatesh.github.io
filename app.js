var exp = {
    experience: [
        { title: "Quorate Technology", date: "June 2019 - August 2019", description: "Working on a demo for the company's speech-to-text technology, making the text searchable using Elasticsearch and AWS Comprehend." },
        { title: "Goldman Sachs", date: "April 2019", description: "Learned about the various teams within the Compliance Tech pipeline and presented a team project based around suggesting improvements to the pipleine and their use of Big Data." },
        { title: "Hack the Burgh V", date: "March 2019", description: "Winner of best use of Edinburgh Festivals API. Worked in a team of 4 to build an app for finding shows during Edinburgh festivals using the Edinburgh Festivals API and Dart." },
        { title: "Amazon Spring Program", date: "April 2018", description: "Built an Alexa Skill game, which read lyrics of a song to the player and asked the player to complete them. Worked in a team of 4, supervised by senior Amazon engineers." },
        { title: "Skyscanner Work Experience", date: "October 2016", description: "Learned about how the Collaborative Tools team enhanced workflows and internal applications. Built a web app that suggested holiday destinations for the user." }
    ]
};

var exp_template =
    "{{#experience}}" +
    "<div class=\"row entry\">" +
    "<div class=\"col-sm-12\">" +
    "<h6 class=\"title\" style=\"text-align: left\">{{title}}<span " +
    "style=\"margin-left: 2em; font-weight: light\">{{date}}</span></h6>" +
    "<p class=\"description\">{{description}}" +
    "</p>" +
    "</div>" +
    "</div>" +
    "{{/experience}}"

var exp_text = Mustache.render(exp_template, exp);

$("#experience").html(exp_text);

var lan = {
    languages: [
        { language: "Python" },
        { language: "Java" },
        { language: "Haskell" },
        { language: "CSS" },
        { language: "HTML" },
        { language: "Javascript" },
        { language: "C" }
    ]
};

var lan_template =
    "{{#languages}}" +
    "<div class=\"col\">" +
    "<p class=\"description\">{{language}}</p>" +
    "</div>" +
    "{{/languages}}"

var lan_start = "<div class=\"col-sm-3\"><h6 class=\"title\">Languages:</h6></div > "

var lan_text = Mustache.render(lan_template, lan);

$("#language").html(lan_start + lan_text);
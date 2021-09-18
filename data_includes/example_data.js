var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq(startsWith("practice"), startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");

//var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq("practice", startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");


var showProgressBar = false;


var defaults = [
    
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "",
        ignoreFailure: true,   // if true never displays an error message
    },
    
    "DashedSentence", {
        mode: "self-paced reading",
        blankText: "+",
        display: "in place",
        showAhead: false,
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "",
        leftComment: "(Very bad)", rightComment: "(Very good)"
    },
    "Question", {
        as: [["f"], ["j"]],
        autoFirstChar:true,
        presentHorizontally: true,
        randomOrder: false,
        showNumbers: false,
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];


var items = [

     ["sep", "Separator", { }],
    
    ["consent", "Form", {consentRequired: true, html: {include: "consent.html" }} ],
            
    ["exit", "Form", {consentRequired: false, html: {include: "exit_MTurk.html" }} ],

    ["instructions", "Form", {consentRequired: false, html: {include: "instructions.html" }} ],
      
    ["open_ended_question1", "Form", {consentRequired: false, html: {include: "open_ended_question1.html" }} ],
    ["open_ended_question2", "Form", {consentRequired: false, html: {include: "open_ended_question2.html" }} ],
   
   


// test


// item 9
[["test.adj.nonisl.short.bare.1.9",9], "AcceptabilityJudgment", {s: "Who thought that the boyfriend edited the letter?"}],
[["test.adj.isl.short.bare.2.9",9], "AcceptabilityJudgment", {s: "Who winked because the boyfriend edited the letter?"}],
[["test.adj.nonisl.long.bare.3.9",9], "AcceptabilityJudgment", {s: "What did you think that the boyfriend edited?"}],
[["test.adj.isl.long.bare.4.9",9], "AcceptabilityJudgment", {s: "What did you wink because the boyfriend edited?"}],


// item 10
[["test.adj.nonisl.short.bare.1.10",10], "AcceptabilityJudgment", {s: "Who thought that the mountaineer indicated the cliff?"}],
[["test.adj.isl.short.bare.2.10",10], "AcceptabilityJudgment", {s: "Who hesitated because the mountaineer indicated the cliff?"}],
[["test.adj.nonisl.long.bare.3.10",10], "AcceptabilityJudgment", {s: "What did you think that the mountaineer indicated?"}],
[["test.adj.isl.long.bare.4.10",10], "AcceptabilityJudgment", {s: "What did you hesitate because the mountaineer indicated?"}],


// item 11
[["test.adj.nonisl.short.bare.1.11",11], "AcceptabilityJudgment", {s: "Who thought that the witch unveiled the totem?"}],
[["test.adj.isl.short.bare.2.11",11], "AcceptabilityJudgment", {s: "Who coughed because the witch unveiled the totem?"}],
[["test.adj.nonisl.long.bare.3.11",11], "AcceptabilityJudgment", {s: "What did you think that the witch unveiled?"}],
[["test.adj.isl.long.bare.4.11",11], "AcceptabilityJudgment", {s: "What did you cough because the witch unveiled?"}],


// item 12
[["test.adj.nonisl.short.bare.1.12",12], "AcceptabilityJudgment", {s: "Who thought that the admirer bought the gift?"}],
[["test.adj.isl.short.bare.2.12",12], "AcceptabilityJudgment", {s: "Who winked because the admirer bought the gift?"}],
[["test.adj.nonisl.long.bare.3.12",12], "AcceptabilityJudgment", {s: "What did you think that the admirer bought?"}],
[["test.adj.isl.long.bare.4.12",12], "AcceptabilityJudgment", {s: "What did you wink because the admirer bought?"}],


// item 13
[["test.adj.nonisl.short.bare.1.13",13], "AcceptabilityJudgment", {s: "Who thought that the priest intoned the benedictions? "}],
[["test.adj.isl.short.bare.2.13",13], "AcceptabilityJudgment", {s: "Who yawned because the priest intoned the benedictions? "}],
[["test.adj.nonisl.long.bare.3.13",13], "AcceptabilityJudgment", {s: "What did you think that the priest intoned?"}],
[["test.adj.isl.long.bare.4.13",13], "AcceptabilityJudgment", {s: "What did you yawn because the priest intoned?"}],


// item 14
[["test.adj.nonisl.short.bare.1.14",14], "AcceptabilityJudgment", {s: "Who thought that the visitor appreciated the cupcake?"}],
[["test.adj.isl.short.bare.2.14",14], "AcceptabilityJudgment", {s: "Who smiled because the visitor appreciated the cupcake?"}],
[["test.adj.nonisl.long.bare.3.14",14], "AcceptabilityJudgment", {s: "What did you think that the visitor appreciated?"}],
[["test.adj.isl.long.bare.4.14",14], "AcceptabilityJudgment", {s: "What did you smile because the visitor appreciated?"}],


// item 15
[["test.adj.nonisl.short.bare.1.15",15], "AcceptabilityJudgment", {s: "Who thought that the toddler devoured the hamburger?"}],
[["test.adj.isl.short.bare.2.15",15], "AcceptabilityJudgment", {s: "Who laughed because the toddler devoured the hamburger?"}],
[["test.adj.nonisl.long.bare.3.15",15], "AcceptabilityJudgment", {s: "What did you think that the toddler devoured?"}],
[["test.adj.isl.long.bare.4.15",15], "AcceptabilityJudgment", {s: "What did you laugh because the toddler devoured?"}],


// item 16
[["test.adj.nonisl.short.bare.1.16",16], "AcceptabilityJudgment", {s: "Who thought that the roommate opened the shutters?"}],
[["test.adj.isl.short.bare.2.16",16], "AcceptabilityJudgment", {s: "Who sneezed because the roommate opened the shutters?"}],
[["test.adj.nonisl.long.bare.3.16",16], "AcceptabilityJudgment", {s: "What did you think that the roommate opened?"}],
[["test.adj.isl.long.bare.4.16",16], "AcceptabilityJudgment", {s: "What did you sneeze because the roommate opened?"}],


// filler
["unannonced.filler.7F.01", "AcceptabilityJudgment", {s: "It seems to me that Robert can't be trusted."}],
["unannonced.filler.1F.01", "AcceptabilityJudgment", {s: "There might mice seem to be in the cupboard."}],
["filler.1F.02", "AcceptabilityJudgment", {s: "Mike prefers tennis because Jon baseball."}],
["filler.1F.03", "AcceptabilityJudgment", {s: "Jenny cleaned her sister the table."}],
["filler.2F.01", "AcceptabilityJudgment", {s: "There had all hung over the fireplace the portraits by Picasso."}],
["filler.2F.02", "AcceptabilityJudgment", {s: "Lily will dance who the king chooses."}],
["filler.3F.01", "AcceptabilityJudgment", {s: "The specimen thawed to study it more closely."}],
["filler.3F.02", "AcceptabilityJudgment", {s: "With that announcement were many citizens denied the opportunity to protest."}],
["filler.4F.01", "AcceptabilityJudgment", {s: "There is likely a river to run down the mountain."}],
["filler.4F.02", "AcceptabilityJudgment", {s: "Richard may have been hiding, but Blake may have done so too."}],
["filler.5F.01", "AcceptabilityJudgment", {s: "The ball perfectly rolled down the hill."}],
["filler.5F.02", "AcceptabilityJudgment", {s: "Lloyd Webber musicals are easy to condemn without even watching."}],
["filler.6F.01", "AcceptabilityJudgment", {s: "There are firemen injured."}],
["filler.6F.02", "AcceptabilityJudgment", {s: "Someone better sing the national anthem."}],
["filler.7F.02", "AcceptabilityJudgment", {s: "Laura is more excited than nervous."}],
["filler.7F.03", "AcceptabilityJudgment", {s: "I hate eating sushi."}],


// practice
["practice.7P", "AcceptabilityJudgment", {s: "She was the winner."}],
["practice.1P", "AcceptabilityJudgment", {s: "Promise to wash, Neal did the car."}],
["practice.4P", "AcceptabilityJudgment", {s: "The brother and sister that were playing all the time had to be sent to bed."}],
["practice.6P", "AcceptabilityJudgment", {s: "The children were cared for by the adults and the teenagers."}],
["practice.2P", "AcceptabilityJudgment", {s: "Ben is hopeful for everyone you do to attend."}],
["practice.5P", "AcceptabilityJudgment", {s: "All the men seem to have all eaten supper."}],
["practice.3P", "AcceptabilityJudgment", {s: "They consider a teacher of Chris geeky."}],


];

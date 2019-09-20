$(document).ready(function () {
    $("#lee").append("Start");

    correctCounter = 0;
    incorrectCounter = 0;


    var myQuestions = [

        {

            // first question
            question: "What is the Avatar reincarnation in order?",
            answer: {
                a: "Water, Earth, Fire, Air",
                b: "Earth, Fire, Air, Water",
                c: "Air, Earth, Fire, Water",
                d: "Fire, Air, Water, Earth",
            },
            correctAnswer: "d",
        },

        {
            // sedond question
            question: "What is Toph's nickname when she fights in the ring?",
            answer: {
                a: "The Blind Bandit",
                b: "The Blind Beauty",
                c: "The Destroyer",
                d: "The Blind Badger",
            },
            correctAnswer: "a",
        },

        {
            //  third 
            question: "What is Sokka's sword made out of?",
            answer: {
                a: "Steel",
                b: "Space Rock",
                c: "Spirit Stone",
                d: "Iron",
            },
            correctAnswer: "b",
        },

        {
            // fourth
            question: "Who is the last known keeper of energy bending?",
            answer: {
                a: "Shirshu",
                b: "Koh",
                c: "The Lion Turtle",
                d: "Roku",
            },
            correctAnswer: "c",
        },

        {
            // fifth
            question: "What was the first Avatars name?",
            answer: {
                a: "Roku",
                b: "Wan",
                c: "Chong",
                d: "Huu",
            },
            correctAnswer: "b",
        },

        {
            // sixth
            question: "What is the name of Jet's squad?",
            answer: {
                a: "The Rowdy Rebels",
                b: "The Blurred Bandits",
                c: "The Night Nomads",
                d: "The Freedom Fighters",
            },
            correctAnswer: "d",
        },

        {
            // seventh
            question: "What is the name of the popular board game in Avatar?",
            answer: {
                a: "Renju",
                b: "Mahjong",
                c: "Pai Sho",
                d: "Shogi",
            },
            correctAnswer: "c",
        },

        {
            // eighth
            question: "What is the name of the group that Iroh is a part of?",
            answer: {
                a: "The Red Lotus",
                b: "The White Lotus",
                c: "Old Man Squad",
                d: "San Jeng",
            },
            correctAnswer: "b",
        },

        {
            // ninth
            question: "What substance besides water does katara learn how to bend?",
            answer: {
                a: "Blood",
                b: "Crystals",
                c: "Mud",
                d: "Lava",
            },
            correctAnswer: "a",
        },

        {
            // tenth
            question: "When Sokka is stuck in the ground what creature keeps him company?",
            answer: {
                a: "Armadillo Lion Cub",
                b: "Snow Leopard Cub",
                c: "Platypus Bear Cub",
                d: "Saber Toothed Moose Lion Cub",
            },
            correctAnswer: "d",
        }

    ];

    $("#results").on("click", function () {

        $("#results").empty();


        submit();


    });


    $("#again").on("click", function () {

        $("#Box").empty();
        boxBoi();



    });



    $("#lee").on("click", function () {

        $("#lee").empty();


        var counter = 100;
        function timer() {
            $("#timer").html(counter)
            counter--;

            if (counter === -1) {
                alert("Times up")
                clearInterval(clock);
                submit();

            }

        }

        var clock = setInterval(timer, 1000);

        boxBoi();


    });







    function submit() {
        $("#results").empty();
        $("#Box").text("Hi")
        $("#again").text("Play Again")



    }

    function boxBoi() {
        for (i = 0; i < myQuestions.length; ++i) {
            $("#results").text("Submit");
            $("#again").empty();


            //Questions
            var quesBox = $('<div class="contentQ" id="quesBox' + (i) + '" />');
            $("#Box").append(quesBox);
            $("#quesBox" + (i)).append((i + 1) + " " + myQuestions[i].question + " ");

            // Answers
            var ansBox = $('<div class="contentA" id="ansBox'+(i)+'" />')
            $("#Box").append(ansBox);
            $("#ansBox" + (i)).append('<input type ="radio"  value="false" name = "kayro ' + (i) + '" class = "butt" id = "radioA ' + (i) + '"/>' + " " +
                " A: " + myQuestions[i].answer.a + " " + '<input type = "radio"  value="false" name = "kayro ' + (i) + '" class = "butt" id = "radioB ' + (i) + '"/>' +
                "B: " + myQuestions[i].answer.b + " " + '<input type = "radio" value="false" name = "kayro ' + (i) + '" class = "butt" id = "radioC ' + (i) + '"/>' + " " +
                "C: " + myQuestions[i].answer.c + " " + '<input type ="radio" value="false" name = "kayro ' + (i) + '" class = "butt" id = "radioD ' + (i) + '"/>' + " " +
                "D: " + myQuestions[i].answer.d + " ");




        }
    }

        
    function grade() {

        // $("#radioA 1").val

        var test = $("#radioA0");
        $("radioA_1").attr('value', "True");
        console.log(test)
        
    }

    grade();

});


// If the right one is clicked plus one to the correct counter 
// else minus to the incorrect counter 


// console.log(myQuestions[1].question);
// console.log(myQuestions[1].answer);










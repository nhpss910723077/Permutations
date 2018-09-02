var question = [];
var ans = "";
var tem = "";
var count = 0;

function getQuestion() {
    for (var i = 0; i < $('.input-question').val().length; i++) {
        question[i] = $('.input-question').val()[i];
    }
}

function permutations(length) {
    if (length === 1) {
        for (var i = 0; i < question.length; i++) {
            ans += question[i];
        }
        $(".answer").append("<p>" + ans + "</p>")
        console.log(ans);
        ans = "";
        count++;
    } else {
        for (var i = 0; i < length; i++) {
            permutations(length - 1);

            tem = question[question.length - length];
            for (var j = question.length - length; j < question.length - 1; j++) {
                question[j] = question[j + 1];
            }
            question[question.length - 1] = tem;
        }
    }
}

$('.btn-submit').click(function () {
    question = [];
    getQuestion();
    permutations(question.length);
    console.log(count);    
});

$('.btn-reset').click(function () {
    $('.answer').html("");
    count = 0;
    question = [];
});
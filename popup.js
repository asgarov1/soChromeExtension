document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('code_writing_service')
        .addEventListener('click', () => copyText(notACodeWritingService), false);

    document.getElementById('should_accept_answer')
        .addEventListener('click', () => copyText(youShouldAcceptAnswer), false);

    document.getElementById('bad_formatting')
        .addEventListener('click', () => copyText(badFormatting), false);
}, false);


function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(showToasterConfirmation);
}

function showToasterConfirmation() {
    let toast = document.getElementById('liveToast');
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), 700);
}

// Answers

let notACodeWritingService = 'Welcome to Stack Overflow! You seem to be asking for someone to write some code for you. Stack Overflow is a question and answer site, not a code-writing service. Please [see here](http://stackoverflow.com/help/how-to-ask) to learn how to write effective questions.';
let youShouldAcceptAnswer = 'If one of the answers below fixes your issue, you should accept it (click the check mark next to the appropriate answer). That does two things. It lets everyone know your issue has been resolved to your satisfaction, and it gives the person that helps you credit for the assist. [See here](http://meta.stackexchange.com/a/5235) for a full explanation.';
let badFormatting = "Please consider revising the code sample you posted in this question. As it currently stands, its formatting and scope make it hard for us to help you; here is a [great resource](http://stackoverflow.com/help/mcve) to get you started on that. -1, don't take it the wrong way. A down vote is how we indicate a content problem around here; improve your formatting and code sample and I (or someone will) gladly revert it. Good luck with your code!";

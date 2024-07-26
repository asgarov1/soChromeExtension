const DOM_CONTENT_LOADED = 'DOMContentLoaded';

const answers = [
    { id: 'Spring_Security_403', text: 'you need to know WHY you are getting `403`, set logging level to debug with `logging.level.org.springframework.security=DEBUG` so that you see the error. After that paste the error into question'},
    { id: 'Not_A_Code_Writing_Service', text: 'Welcome to Stack Overflow! You seem to be asking for someone to write some code for you. Stack Overflow is a question and answer site, not a code-writing service. Please [see here](http://stackoverflow.com/help/how-to-ask) to learn how to write effective questions.'},
    { id: 'You_Should_Accept_Answer', text: 'If one of the answers below fixes your issue, you should accept it (click the check mark next to the appropriate answer). That does two things. It lets everyone know your issue has been resolved to your satisfaction, and it gives the person that helps you credit for the assist. [See here](http://meta.stackexchange.com/a/5235) for a full explanation.'},
    { id: 'Bad_Formatting', text: 'Please consider revising the code sample you posted in this question. As it currently stands, its formatting and scope make it hard for us to help you; here is a [great resource](http://stackoverflow.com/help/mcve) to get you started on that. -1, don\'t take it the wrong way. A down vote is how we indicate a content problem around here; improve your formatting and code sample and I (or someone will) gladly revert it. Good luck with your code!'},
    { id: 'No_Images_Of_Code', text: 'Please include code, not images of code: see [Why not upload images of code errors when asking a question](https://meta.stackoverflow.com/questions/285551/why-should-i-not-upload-images-of-code-data-errors). Edit the question and include code fragments.'},
    { id: 'What_Is_Best_Way_Questions', text: 'in general in Software Development there is no *best* way and SO frawns upon such questions - see [this dicussion](https://meta.stackoverflow.com/questions/296542/are-is-it-a-good-practice-questions-off-topic-or-opinion-based).'},
    { id: 'Set_Debug_Level', text: 'Please set logging level to debug with `logging.level.org.springframework.security=DEBUG` so that you see the error. After that paste the error, correctly formatted, into question'},
    { id: 'Software_Recommendations', text: 'Off-topic here. Sister site: [softwarerecs.stackexchange.com](https://softwarerecs.stackexchange.com/)'},
    { id: 'Code_Optimization', text: 'Off-topic here. See [here](https://meta.stackoverflow.com/questions/261841/can-i-post-questions-about-optimizing-code-on-stack-overflow)'},
    { id: 'Authentication_Manager_SO', text: 'Off-topic here. it is most likely the way you have defined your AuthenticationManager bean - see my answer [here](https://stackoverflow.com/questions/78775839/i-cant-auto-login-user-after-registration-in-spring-boot/78776321#78776321)'}
]

document.addEventListener(DOM_CONTENT_LOADED, function () {
    answers.forEach(answer =>
        document.getElementById("answers-div").innerHTML +=
            `<a class="list-group-item list-group-item-action" id=${answer.id} href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="${answer.text}">${answer.id.replaceAll("_", " ")}</a>`
    )

    answers.forEach(answer =>
        document.getElementById(answer.id).addEventListener('click', () => copyText(answer.text), false)
    )
}, false);




function copyText(text) {
    navigator.clipboard.writeText(text).then(showToasterConfirmation);
}

function showToasterConfirmation() {
    let toast = document.getElementById('liveToast');
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), 700);
}

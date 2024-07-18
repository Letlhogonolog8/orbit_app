function getBotResponse(input) {
    const processedInput = input.toLowerCase();

    // Greetings and general inquiries
    if (["hi", "hello", "hey", "hallo", "dumela"].includes(processedInput.split(' ')[0])) {
        return "Hello there!";
    } else if (processedInput.includes("how are you doing")) {
        return "I'm doing well, thank you for asking! How about you?";
    } else if (processedInput.includes("how have you been")) {
        return "I've been here, ready to assist you whenever you need me! What can I do to help?";
    } else if (processedInput.includes("what do you do")) {
        return "I'm a chatbot designed to assist with various inquiries and provide information.";
    } else if (processedInput.includes("can i ask")) {
        return "Of course! Feel free to ask anything.";
    } else if (processedInput === "hey") {
        return "Hey there! What's on your mind?";
    } else if (processedInput === "how are you") {
        return "I'm doing well, thank you! How about you?";
    } else if (processedInput === "where have you been") {
        return "I've been right here, ready to assist you whenever you need me! How can I help?";
    } else if (processedInput === "are you good" || processedInput === "are you good?") {
        return "I'm always ready to assist you to the best of my abilities! If there is anything specific you need help with, just let me know.";
    } else if (processedInput === "whats up") {
        return "Not much, just here to assist you!";
    } else if (processedInput === "i need help" || processedInput === "where can i get help") {
        return "It depends on what kind of help you are looking for. Could you give me a bit more detail? I'm here to help.";
    } else if (processedInput === "where are you from") {
        return "I exist in the digital realm, so you could say I'm from the internet!";
    } else if (processedInput === "what languages do you speak") {
        return "I'm fluent in the language of code! But I can communicate in English with you.";
    } else if (processedInput === "are you a human") {
        return "No, I'm a chatbot, programmed to assist and provide information.";
    } else if (
        processedInput.includes("how can i apply") ||
        processedInput.includes("how to apply")
    ) {
        return 'Please follow this <a href="https://www.orbitcollege.co.za/enrolment.html" target="_blank">link</a> to apply.';
    } else if (
        processedInput.includes("can you please help") ||
        processedInput.includes("i need some help")
    ) {
        return "Of course! What do you need help with?";
    } else if (processedInput.includes("who created you")) {
        return "I was created by a group of AI students at Orbit TVET College (Brits).";
    } else if (
        ["hi", "hey there", "hello there"].includes(processedInput)
    ) {
        return "Hello! How can I assist you today?";
    } else if (
        processedInput.includes("how are you feeling")
    ) {
        return "As an AI, I don't have feelings in the way humans do, but I'm here and ready to assist you! How can I help you today?";
    } else if (
        processedInput.includes("what can you tell me")
    ) {
        return "I can provide information, answer questions, generate text based on prompts, help with creative writing, offer advice, and much more. Is there something specific you'd like to know or discuss?";
    } else if (
        processedInput === "okay"
    ) {
        return "Great! Feel free to let me know if you have any questions or if there's anything specific you'd like to talk about. I'm here to help!";
    } else if (
        processedInput.includes("thank you")
    ) {
        return "You're welcome! If you ever need assistance in the future, don't hesitate to reach out. Have a wonderful day!";
    } else if (
        processedInput.includes("how to register") ||
        processedInput.includes("how can i register") ||
        processedInput.includes("how to register at orbit tvet college")
    ) {
        return 'You can register at Orbit TVET College through <a href="https://www.orbitcollege.co.za/register.html" target="_blank">this link</a>.';
    } else if (
        processedInput.includes("orbit tvet college") ||
        processedInput.includes("brits tech") ||
        processedInput.includes("orbit tvet college courses")
    ) {
        return 'For information on courses offered at Orbit TVET College, please visit <a href="https://www.orbitcollege.co.za/courses.html" target="_blank">this link</a>.';
    } else if (
        processedInput.includes("apply for admission to orbit tvet college")
    ) {
        return `To apply for admission to Orbit TVET College, you have a few options:<br>
            <ul>
                <li>Online Application: Visit the college website to download the application form: <a href="https://www.orbitcollege.co.za/apply.html" target="_blank">here</a>. Alternatively, you can complete the online pre-screening test on the college website. After completing the test, select a campus and obtain your application form. Fill out the application form completely and attach all necessary supporting documents. Finally, submit your application form online.</li>
                <li>In-Person Application: Acquire an application form directly from the college campus. Provide proof of application fee payment. Ensure you have all the required documents, including a valid ID and certified results or certificates. Complete the application form and submit it to the college.</li>
                <li>Placement Assessment: As a new student, you are required to write a Placement Assessment Test. This assessment is completed online using the following link: <a href="https://www.orbitcollege.co.za/placement-test.html" target="_blank">Placement Assessment Test</a>. Note that the placement assessment is a selection and placement tool; it does not test your IQ.</li>
            </ul>
            Remember to check the college’s official website for any additional instructions or specific requirements. Best of luck with your application! 🎓`;
    } else if (
        processedInput.includes("how to enroll")
    ) {
        return 'Follow <a href="https://www.orbitcollege.co.za/enroll.html" target="_blank">this link</a> to enroll.';
    } else if (
        processedInput.includes("orbit tvet college online application")
    ) {
        return 'Follow <a href="https://www.orbitcollege.co.za/online-application.html" target="_blank">this link</a> for the online application.';
    } else if (
        processedInput.includes("orbit tvet college second semester online application")
    ) {
        return 'Follow <a href="https://www.orbitcollege.co.za/second-semester-application.html" target="_blank">this link</a> for the second-semester online application.';
    } else if (
        processedInput.includes("orbit tvet college application opening date 2024-2025")
    ) {
        return 'For information about the application opening date for 2024-2025, please check <a href="https://www.orbitcollege.co.za/application-opening-date.html" target="_blank">this link</a>.';
    } else if (
        processedInput.includes("submit my second trimester application at orbit tvet college")
    ) {
        return 'To submit your second trimester application, please visit: <a href="https://www.orbitcollege.co.za/second-trimester-application.html" target="_blank">Second Trimester Application Link</a>';
    } else if (
        processedInput.includes("where can i find student support") ||
        processedInput.includes("reception") ||
        processedInput.includes("ai lab") ||
        processedInput.includes("staff room") ||
        processedInput.includes("hall") ||
        processedInput.match(/where can i find [a-cg][0-9]+/i)
    ) {
        return "For directions to that or any other relevant department, please navigate through the college app.";
    }

    // Default response for unhandled inputs
    return "I'm not sure I understand. Try asking something else!";
}

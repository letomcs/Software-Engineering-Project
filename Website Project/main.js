function openLink(link) {
    location.href = link.value;
}

gsap.registerPlugin(ScrollTrigger);

//home page animations
gsap.from(".img2", {y: "100%", opacity: 0, duration: 1}, 0.5);
gsap.fromTo("#title1", {x: "-500"}, {x: "0%", duration: 2, ease: "elastic.out"}, 0);
gsap.from("#callback", {y: "200%", duration: 1.3, opacity: 0}, 0);
gsap.from([".home", "#button1"], {x: 800, y: 300, duration: 1, opacity: 0}, 0.25);
gsap.from(".img3", {x: -500, duration: 1, opacity: 0}, 0.5);
gsap.from(".services-list", {scrollTrigger: {trigger: ".services-list", start: "top 80%", end: "top top"}, x: "200%", opacity: 0, duration: 1}, 0);

//about page animations
gsap.from(["#title2", ".img5"], {x: -300, opacity: 0, duration: 1}, 0);
gsap.from(".img6", {x: "-200%", duration: 1}, 0.25);
gsap.from(".img6", {opacity: 0, duration: 1}, 0.5);
gsap.from("#center1", {scrollTrigger: {trigger: "#center1", start: "top 80%", end: "top top"}, opacity: 0, duration: 2}, 0.25);
gsap.from("#aboutright", {x: 1000, duration: 1}, 0.25);
gsap.from([".img4", "#aboutleft"], {scrollTrigger: {trigger: "#aboutleft", start: "top 80%", end: "top top"}, x: 2000, duration: 1}, 0);

//services page animations

gsap.from([".img7", "#title3"], {x: 500, opacity: 0, duration: 1}, 0);
gsap.from("#center2", {x: -1000, duration: 1, opacity: 0}, 0.25);
gsap.from(".service", {y: 500, duration: 1, opacity: 0}, 0.5);

//blog page animations

gsap.from("#title4", {x: 1500, opacity: 0, duration: 1.5}, 0);
gsap.from("#center3", {x: -1500, duration: 1}, 0.5);
gsap.from([".img10", ".blog"], {scale: 0, duration: 1, opacity: 0}, 1);

//contact page animations

gsap.from([".img8", "#title5"], {x: -500, opacity: 0, duration: 1}, 0);
gsap.from("#center4", {scrollTrigger: {trigger: "#center4", start: "top 80%", end: "top top"}, opacity: 0, duration: 2}, 0.25);
gsap.from("#maps1", {scrollTrigger: {trigger: "#maps1", start: "top 80%", end: "top top"}, x: 500, opacity: 0, duration: 1}, 0.5);
gsap.from("#maps2", {scrollTrigger: {trigger: "#maps2", start: "top 80%", end: "top top"}, x: -500, opacity: 0, duration: 1}, 0.5);
gsap.from("#box1", {x: -1200, duration: 1}, 0.25);
gsap.from("#box2", {x: 1200, duration: 1}, 0.25);

//article page animations

gsap.from("#title6", {y: -500, duration: 1}, 0);
gsap.from(".article", {scrollTrigger: {trigger: ".article", start: "top-=500px 80%", end: "top top"}, y: 500, duration: 1, opacity: 0}, 0.5);

function emailSend() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + firstName + " " + lastName + 
    "<br/> Email: " + email +
    "<br/> Message: " + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shelbybalsano@gmail.com",
        Password : "D6DC03EA3307F761C31E7082B96689910174",
        To : 'shelbybalsano@yahoo.com',
        From : "shelbybalsano@gmail.com",
        Subject : "Thank you for your appointmnet!!",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAjj1yw_SHqCjbOgYlVTQdf69A1gEiGLDA",
//     authDomain: "ikun-8a885.firebaseapp.com",
//     projectId: "ikun-8a885",
//     storageBucket: "ikun-8a885.appspot.com",
//     messagingSenderId: "935066360346",
//     appId: "1:935066360346:web:b2a1aa69a16f79ebcfcfa3",
//     measurementId: "G-NGMT1F337S"
//   };
  
  
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore(); // Initialize Firestore

// Handle scroll events
document.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Fade out the Y shape
    const yShape = document.querySelector('.y-shape');
    if (scrollTop > 0) {
        yShape.classList.add('fade-out');
    } else {
        yShape.classList.remove('fade-out');
    }

    // Fade in the content
    const content = document.querySelector('.content');
    if (scrollTop > windowHeight / 2) {
        content.style.opacity = '1';
    } else {
        content.style.opacity = '0';
    }

    // Fade in individual elements as they come into view
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log('Form data:', { name, email, message }); // Log form data for debugging

        // Add a new document with a generated id to the Firestore collection "contacts"
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
        .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id);
            // Optionally, you can reset the form after successful submission
            form.reset();
        })
        .catch(function(error) {
            console.error('Error adding document: ', error);
        });
    });
});
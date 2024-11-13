// Function to generateResume
function generateResume() {
    // Collect input values
    var name = document.getElementById('name').value;
    var fullname = document.getElementById('fullname').value;
    var resumetitle = document.getElementById('resumetitle').value;
    var dateOfbirth = document.getElementById('dateOfbirth').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    var language = document.getElementById('language').value;
    // Profile picture handling
    var profilePicInput = document.getElementById("profilePic");
    var profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }
    document.getElementById("nameDisplay").textContent = name;
    document.getElementById("fullnameDisplay").textContent = fullname;
    document.getElementById("dateofbirthDisplay").textContent = dateOfbirth;
    document.getElementById("contactDisplay").textContent = contact;
    document.getElementById("emailDisplay").textContent = email;
    document.getElementById("resumetitleDisplay").textContent = resumetitle;
    document.getElementById("educationDisplay").textContent = education;
    document.getElementById("experienceDisplay").textContent = workExperience;
    document.getElementById("languageDisplay").textContent = language;
    // Skills List
    var skillsDisplay = document.getElementById("skillsDisplay");
    skillsDisplay.innerHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
    var resumeImage = document.getElementById("resumeImage");
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    }
    // Show the resume display 
    document.getElementById('resume-form').style.display = "none";
    document.getElementById('resume-display').style.display = 'block';
}
// Function to editResume
function editResume() {
    var name = document.getElementById('nameDisplay').textContent || "";
    var fullname = document.getElementById('fullnameDisplay').textContent || "";
    var resumetitle = document.getElementById('resumetitleDisplay').textContent || "";
    var birthofdate = document.getElementById('dateofbirthDisplay').textContent || "";
    var contact = document.getElementById('contactDisplay').textContent || "";
    var email = document.getElementById('emailDisplay').textContent || "";
    var education = document.getElementById('educationDisplay').textContent || "";
    var workExperience = document.getElementById('experienceDisplay').textContent || "";
    var language = document.getElementById('languageDisplay').textContent || "";
    document.getElementById("name").value = name;
    document.getElementById("fullname").value = fullname;
    document.getElementById("resumetitle").value = resumetitle;
    document.getElementById("dateOfbirth").value = birthofdate;
    document.getElementById("contact").value = contact;
    document.getElementById("email").value = email;
    document.getElementById("education").value = education;
    document.getElementById("work-experience").value = workExperience;
    document.getElementById("language").value = language;
    // Profile picture handling
    var profilePicInput = document.getElementById("profilePic");
    var resumeImage = document.getElementById("resumeImage");
    var profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    }
    else {
        resumeImage.style.display = "none";
    }
    document.getElementById('resume-form').style.display = "block";
    document.getElementById('resume-display').style.display = 'none';
}

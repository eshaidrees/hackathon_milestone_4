// Function to generateResume
function generateResume() {

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fullname = (document.getElementById('fullname') as HTMLInputElement).value;   
    const resumetitle = (document.getElementById('resumetitle') as HTMLInputElement).value;
    const dateOfbirth = (document.getElementById('dateOfbirth') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const language = (document.getElementById('language') as HTMLInputElement).value;


    // Profile picture handling
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
    let profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }


    (document.getElementById("nameDisplay") as HTMLElement).textContent = name;
    (document.getElementById("fullnameDisplay") as HTMLElement).textContent = fullname;
    (document.getElementById("dateofbirthDisplay") as HTMLElement).textContent = dateOfbirth;
    (document.getElementById("contactDisplay") as HTMLElement).textContent = contact;
    (document.getElementById("emailDisplay") as HTMLElement).textContent = email;
    (document.getElementById("resumetitleDisplay") as HTMLElement).textContent = resumetitle;
    (document.getElementById("educationDisplay") as HTMLElement).textContent = education;
    (document.getElementById("experienceDisplay") as HTMLElement).textContent = workExperience;
    (document.getElementById("languageDisplay") as HTMLElement).textContent = language;


    // Skills List
    const skillsDisplay = document.getElementById("skillsDisplay") as HTMLElement;
    skillsDisplay.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join("");

    const resumeImage = document.getElementById("resumeImage") as HTMLImageElement;
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    }

    // Show the resume display 
   (document.getElementById('resume-form')as HTMLDivElement).style.display = "none";
  (document.getElementById('resume-display') as HTMLDivElement).style.display = 'block';

 

}
// Function to editResume
function editResume(){

    const name = (document.getElementById('nameDisplay') as HTMLElement).textContent || "";
    const fullname = (document.getElementById('fullnameDisplay') as HTMLElement).textContent || "";
    const resumetitle = (document.getElementById('resumetitleDisplay') as HTMLElement).textContent  || "";
    const birthofdate = (document.getElementById('dateofbirthDisplay') as HTMLElement).textContent || "";
    const contact = (document.getElementById('contactDisplay') as HTMLElement).textContent || "";
    const email = (document.getElementById('emailDisplay') as HTMLElement).textContent || "";
    const education = (document.getElementById('educationDisplay') as HTMLElement).textContent || "";
    const workExperience = (document.getElementById('experienceDisplay') as HTMLElement).textContent || "";
    const language = (document.getElementById('languageDisplay') as HTMLElement).textContent || "";



    (document.getElementById("name") as HTMLInputElement).value = name;
    (document.getElementById("fullname") as HTMLInputElement).value = fullname;
    (document.getElementById("resumetitle") as HTMLInputElement).value = resumetitle;
    (document.getElementById("dateOfbirth") as HTMLInputElement).value = birthofdate;
    (document.getElementById("contact") as HTMLInputElement).value = contact;
    (document.getElementById("email") as HTMLInputElement).value = email;
    (document.getElementById("education") as HTMLTextAreaElement).value = education;
    (document.getElementById("work-experience") as HTMLTextAreaElement).value = workExperience;
    (document.getElementById("language") as HTMLInputElement).value = language;




    // Profile picture handling
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
    const resumeImage = document.getElementById("resumeImage") as HTMLImageElement;
    let profilePicURL = "";
    if (profilePicInput.files && profilePicInput.files[0]) {
        profilePicURL = URL.createObjectURL(profilePicInput.files[0]);
    }
    if (profilePicURL) {
        resumeImage.src = profilePicURL;
        resumeImage.style.display = "block";
    } else {
        resumeImage.style.display = "none";
    }

   (document.getElementById('resume-form')as HTMLDivElement).style.display = "block";
   (document.getElementById('resume-display') as HTMLDivElement).style.display = 'none';
 
  

}


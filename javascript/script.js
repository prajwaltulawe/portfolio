(function populateProjects() {
  const projects = [
    {
      id: "carrer",
      projectName: "Student Career Suggestion",
      link: "http://carrersuggestion.42web.io/",
      description:
        "The intuitive career system uses student responses to a set of questions, leveraging existing data to map personal interests to careers and utilizing machine learning algorithms for result based on prior data analysis",
      techStack: " HTML, CSS, JavaScript, Bootstrap, Python ( flask ), PHP",
      imageSrc: "./images/projects/carrer-img.webp",
      imgAlt: "carrer-img",
    },
    {
      id: "mpm",
      projectName: "My Personal Manual",
      link: "https://mypersonalmanual.com/",
      description:
        "This application features questionnaires for students and job market beginners. It generates downloadable PDF reports of the questionnaire results for easy communication and analysis of user psychology in a specific region from data collected.",
      techStack: " HTML, CSS, JavaScript, JQuery, Bootstrap, PHP, SQL",
      imageSrc: "./images/projects/mpm-img.webp",
      imgAlt: "mpm-img",
    },
    {
      id: "cropbid",
      projectName: "CropBid",
      link: "http://cropbid.42web.io/",
      description:
        "CropBid is an online web based application, developed to reduce the exploitation of farmer by allowing them to receive best price quotation for their harvest by connecting them globally through our platform.",
      techStack: " HTML, CSS, JavaScript, JQuery, Bootstrap, PHP, SQL",
      imageSrc: "./images/projects/cropbid-img.webp",
      imgAlt: "cropbid-img",
    },
    {
      id: "quotation",
      projectName: "Quotation Generator",
      link: "https://prajwaltulawe.github.io/quotationGenerator/",
      description:
        "Quotation Generator is a free online web tool for creating quotations in PDF format, currently used by small and medium scale enterprises, freelancers and service providers for providing quotations to their clients and personally designed one for a medium scale service provider for his daily business.",
      techStack: " HTML, CSS, JavaScript, JQuery",
      imageSrc: "./images/projects/quotation-img.webp",
      imgAlt: "quotation-img",
    },
    {
      id: "vehicle",
      projectName: "Vehicle Details Scrapper",
      link: "https://github.com/prajwaltulawe/vehicleDetailsScrapper",
      description:
        "This project automates the process of extracting vehicle information from the official government website. By leveraging web scraping techniques, this application efficiently gathers relevant details of vehicles, providing users with a convenient way to access the data.",
      techStack: " HTML, CSS, JavaScript, JQuery, Node.js, Puppeter",
      imageSrc: "./images/projects/vehicle-img.webp",
      imgAlt: "vehicle-img",
    },
    {
      id: "ecomm",
      projectName: "E-Commerce Admin Panel",
      link: "http://eeommerce-adminpanel.000.pe/admin/",
      description:
        "E-commerce admin panel is a powerful web app built on Laravel (PHP), empowering admins with robust eCommerce functionalities. Manage products, orders, and inventory effortlessly, with the MVC architecture, ensuring seamless performance and scalability of online store.",
      techStack: " HTML, CSS, JavaScript, Bootstrap, Laravel ( php ), Sql",
      imageSrc: "./images/projects/ecomm-img.webp",
      imgAlt: "ecomm-img",
    },
    {
      id: "mediafire",
      projectName: "Mediafire Bot",
      link: "https://github.com/prajwaltulawe/mediafireBot",
      description:
        "Mediafire is an online cloud service provider in which if a regular user needs to download all files from a folder, they needs to face several popups and continue a looping process. This bot is made to escape from this situation as it automates the process.",
      techStack: " HTML, CSS, JavaScript, JQuery, Node.js, Puppeter",
      imageSrc: "./images/projects/mediafire-img.webp",
      imgAlt: "mediafire-img",
    },
    {
      id: "chatapp",
      projectName: "Chat Application",
      link: "https://group-private-chat-application.glitch.me/",
      description:
        "Chat application is a user-friendly, real-time communication platform for individuals. It allows users to exchange messages and engage in group conversation. With its simple interface and easy connectivity, the application enables instant and convenient communication across various devices.",
      techStack: " HTML, CSS, JavaScript, Node.js, Socket.io",
      imageSrc: "./images/projects/chatapp-img.webp",
      imgAlt: "chatapp-img",
    },
    {
      id: "cms",
      projectName: "Complaint Management System",
      link: "http://myprojects.000.pe/complaintManagementSystem/complaintregistrartion.php",
      description:
        "It is a platform for efficient complaint handling. Users can easily submit complaints, while administrators manage and update records with ease and provides solution to user thorugh mentioned contact details.",
      techStack: " HTML, CSS, JavaScript, JQuery, Node.js, Puppeter",
      imageSrc: "./images/projects/cms-img.webp",
      imgAlt: "cms-img",
    },
  ];
  let projectCointainer = document.getElementsByClassName(
    "projects-cointainer"
  )[0];
  for (let i = 0; i < projects.length; i++) {
    // Create the main div with class 'project'
    const projectDiv = document.createElement("div");
    if (i > 2) {
      projectDiv.classList.add("project", "left-aligned", "d-none");
    } else {
      projectDiv.classList.add("project", "left-aligned");
    }
    projectDiv.id = projects[i].id;

    // Create project-description div
    const projectDescriptionDiv = document.createElement("div");
    projectDescriptionDiv.classList.add("project-description");

    // Create project-title div
    const projectTitleDiv = document.createElement("div");
    projectTitleDiv.classList.add("project-title");
    const projectNameSpan = document.createElement("span");
    projectNameSpan.textContent = projects[i].projectName;
    const viewProjectLink = document.createElement("a");
    viewProjectLink.href = projects[i].link;
    viewProjectLink.target = "_blank";
    viewProjectLink.textContent = "View Project";
    viewProjectLink.classList.add("view-project");
    projectTitleDiv.appendChild(projectNameSpan);
    projectTitleDiv.appendChild(viewProjectLink);

    // Create project-des div
    const projectDesDiv = document.createElement("div");
    projectDesDiv.classList.add("project-des");
    const projectDesSpan = document.createElement("span");
    projectDesSpan.textContent = projects[i].description;
    projectDesDiv.appendChild(projectDesSpan);

    // Create tech-stack div
    const techStackDiv = document.createElement("div");
    techStackDiv.classList.add("tech-stack");
    const techStackStrong1 = document.createElement("strong");
    const techStackH41 = document.createElement("h4");
    techStackH41.textContent = "Tech Stack Used : ";
    techStackStrong1.appendChild(techStackH41);
    const techStackSpan1 = document.createElement("span");
    techStackSpan1.appendChild(techStackStrong1);
    const techStackStrong2 = document.createElement("strong");
    const techStackH42 = document.createElement("h3");
    techStackH42.textContent = projects[i].techStack;
    techStackStrong2.appendChild(techStackH42);
    const techStackSpan2 = document.createElement("span");
    techStackSpan2.appendChild(techStackStrong2);
    techStackDiv.appendChild(techStackStrong1);
    techStackDiv.appendChild(techStackStrong2);

    // Append elements to the projectDescriptionDiv
    projectDescriptionDiv.appendChild(projectTitleDiv);
    projectDescriptionDiv.appendChild(projectDesDiv);
    projectDescriptionDiv.appendChild(techStackDiv);

    // Create project-img div
    const projectImgDiv = document.createElement("div");
    projectImgDiv.classList.add("project-img");
    const projectImg = document.createElement("img");
    projectImg.src = projects[i].imageSrc;
    projectImg.alt = projects[i].imgAlt;

    // Append elements to the projectImgDiv
    projectImgDiv.appendChild(projectImg);

    // Append projectDescriptionDiv and projectImgDiv to the main projectDiv
    projectDiv.appendChild(projectDescriptionDiv);
    projectDiv.appendChild(projectImgDiv);

    // Append the complete projectDiv to the parentElement
    projectCointainer.appendChild(projectDiv);

    if (projects[i + 1]) {
      // Create the main div with class 'project'
      const projectDiv = document.createElement("div");
      if (i + 1 > 2) {
        projectDiv.classList.add("project", "right-aligned", "d-none");
      } else {
        projectDiv.classList.add("project", "right-aligned");
      }
      projectDiv.id = projects[i + 1].id;

      // Create project-description div
      const projectDescriptionDiv = document.createElement("div");
      projectDescriptionDiv.classList.add(
        "project-description",
        "right-aligned-description"
      );

      // Create project-title div
      const projectTitleDiv = document.createElement("div");
      projectTitleDiv.classList.add("project-title", "right-aligned-title");
      const projectNameSpan = document.createElement("span");
      projectNameSpan.textContent = projects[i + 1].projectName;
      const viewProjectLink = document.createElement("a");
      viewProjectLink.href = projects[i + 1].link;
      viewProjectLink.target = "_blank";
      viewProjectLink.textContent = "View Project";
      viewProjectLink.classList.add("view-project");
      projectTitleDiv.appendChild(projectNameSpan);
      projectTitleDiv.appendChild(viewProjectLink);

      // Create project-des div
      const projectDesDiv = document.createElement("div");
      projectDesDiv.classList.add("project-des", "right-aligned-des");
      const projectDesSpan = document.createElement("span");
      projectDesSpan.textContent = projects[i + 1].description;
      projectDesDiv.appendChild(projectDesSpan);

      // Create tech-stack div
      const techStackDiv = document.createElement("div");
      techStackDiv.classList.add("tech-stack");
      const techStackStrong1 = document.createElement("strong");
      const techStackH41 = document.createElement("h4");
      techStackH41.textContent = "Tech Stack Used : ";
      techStackStrong1.appendChild(techStackH41);
      const techStackSpan1 = document.createElement("span");
      techStackSpan1.appendChild(techStackStrong1);
      const techStackStrong2 = document.createElement("strong");
      const techStackH42 = document.createElement("h3");
      techStackH42.textContent = projects[i + 1].techStack;
      techStackStrong2.appendChild(techStackH42);
      const techStackSpan2 = document.createElement("span");
      techStackSpan2.appendChild(techStackStrong2);
      techStackDiv.appendChild(techStackStrong1);
      techStackDiv.appendChild(techStackStrong2);

      // Append elements to the projectDescriptionDiv
      projectDescriptionDiv.appendChild(projectTitleDiv);
      projectDescriptionDiv.appendChild(projectDesDiv);
      projectDescriptionDiv.appendChild(techStackDiv);

      // Create project-img div
      const projectImgDiv = document.createElement("div");
      projectImgDiv.classList.add("project-img", "right-aligned-img");
      const projectImg = document.createElement("img");
      projectImg.src = projects[i + 1].imageSrc;
      projectImg.alt = projects[i + 1].imgAlt;

      // Append elements to the projectImgDiv
      projectImgDiv.appendChild(projectImg);

      // Append projectDescriptionDiv and projectImgDiv to the main projectDiv
      projectDiv.appendChild(projectDescriptionDiv);
      projectDiv.appendChild(projectImgDiv);

      // Append the complete projectDiv to the parentElement
      projectCointainer.appendChild(projectDiv);
    }
    i++;
  }
})();

// NEW SECTION ON SCROLL
const sections = ["main-sec", "projects", "about", "contact", "socials"];
let currentSectionIndex = 0;
let isScrolling = false;

function setActiveSection(index) {
  const activeSection = document.getElementById(sections[index]);
  activeSection.scrollIntoView({ behavior: "smooth" });
  let navItem = `[data-navItem-${sections[index]}="nav-${sections[index]}"]`;
  if (document.getElementById("main-sec").offsetWidth > 481) {
    setActive(document.querySelectorAll(navItem)[0]);
    setActive(document.querySelectorAll(navItem)[1]);
  }
}
window.onscroll = () => {
  if (isScrolling) return;

  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 1000);

  const scrollPosition = window.scrollY;
  const sectionHeights = sections.map(
    (section) => document.getElementById(section).offsetHeight
  );

  let totalHeight = 0;
  let newSectionIndex = 0;

  for (let i = 0; i < sectionHeights.length - 1; i++) {
    totalHeight += sectionHeights[i];
    if (scrollPosition < totalHeight) {
      newSectionIndex = i;
      break;
    }
  }

  if (currentSectionIndex == 0 && currentSectionIndex < 3) {
    currentSectionIndex = currentSectionIndex + 1;
    setActiveSection(currentSectionIndex);
  } else if (newSectionIndex !== currentSectionIndex) {
    currentSectionIndex = newSectionIndex;
    setActiveSection(currentSectionIndex);
  }
};

// SHOW ALL PROJECTS
function showProjects() {
  var hiddenProjects = document.querySelectorAll(".projects .d-none");
  hiddenProjects.forEach((element) => {
    element.setAttribute("style", `display: flex`);
  });
  var viewMore = document.getElementsByClassName("view-more-button")[0];
  viewMore.setAttribute("style", `display: none`);
}

// SHOW RESPONSIVE NAV SECTION
function showNav() {
  if (document.querySelectorAll(".resNav")[0]) {
    document.querySelectorAll(".lines")[0].setAttribute("class", `lines`);
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach((element) => {
      element.setAttribute("class", `nav-item d-none`);
    });
  } else {
    var otherNavItems = document.querySelectorAll(".nav-item");
    otherNavItems.forEach((element) => {
      element.setAttribute("class", `nav-item`);
    });
    document
      .querySelectorAll(".lines")[0]
      .setAttribute("class", `lines resNav`);
  }
}

// SET ACTIVE SECTION
function setActive(ref) {
  var otherNavItems = document.querySelectorAll(".nav-item");
  otherNavItems.forEach((element) => {
    element.setAttribute("class", `nav-item`);
  });
  ref.parentElement.setAttribute("class", `nav-item active`);
}

// CLOSE MESSAGE ERROR MODAL
function closeModal() {
  document.getElementsByClassName("modal-cointainer")[0].style.display = "none";
}

// RUN ANIMATION OF IMAGES
$(document).ready(function () {
  $("div.project").hover(
    function () {
      var projectGif = {
        carrer: "./images/projects/carrer-gif.webp",
        mpm: "./images/projects/mpm-gif.webp",
        cropbid: "./images/projects/cropbid-gif.webp",
        mediafire: "./images/projects/mediafire-gif.webp",
        cms: "./images/projects/cms-gif.webp",
        ecomm: "./images/projects/ecomm-gif.gif",
        quotation: "./images/projects/quotation-gif.gif",
        vehicle: "./images/projects/vehicle-gif.gif",
        chatapp: "./images/projects/chatapp-gif.gif",
      };
      this.childNodes[1].childNodes[0].src = projectGif[this.id];
    },
    function () {
      var projectImg = {
        carrer: "./images/projects/carrer-img.webp",
        mpm: "./images/projects/mpm-img.webp",
        cropbid: "./images/projects/cropbid-img.webp",
        ecomm: "./images/projects/ecomm-img.webp",
        mediafire: "./images/projects/mediafire-img.webp",
        cms: "./images/projects/cms-img.webp",
        quotation: "./images/projects/quotation-img.webp",
        vehicle: "./images/projects/vehicle-img.webp",
        chatapp: "./images/projects/chatapp-img.webp",
      };
      this.childNodes[1].childNodes[0].src = projectImg[this.id];
    }
  );

  $("div.project").on("pointerdown", function (event) {
    $("div.project-img").each(function () {
      if (this.childNodes[1].src.indexOf("gif") != -1) {
        var gifWord = this.childNodes[1].src.indexOf("gif");
        this.childNodes[1].src =
          this.childNodes[1].src.substr(0, gifWord) + "img.webp";
      }
    });

    var projectGif = {
      carrer: "./images/projects/carrer-gif.webp",
      mpm: "./images/projects/mpm-gif.webp",
      cropbid: "./images/projects/cropbid-gif.webp",
      mediafire: "./images/projects/mediafire-gif.webp",
      cms: "./images/projects/cms-gif.webp",
      ecomm: "./images/projects/ecomm-gif.gif",
      quotation: "./images/projects/quotation-gif.gif",
      vehicle: "./images/projects/vehicle-gif.gif",
      chatapp: "./images/projects/chatapp-gif.gif",
    };

    if (this.childNodes[3].childNodes[1].src.indexOf("gif") == -1) {
      this.childNodes[3].childNodes[1].src = projectGif[this.id];
      event.preventDefault();
    }
  });

  // RECIVE MESSAGES
  $("#form").submit(function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.post("https://portfolio-backend-u37l.onrender.com/addMessage", formData, function (response) {
      if (response.success === true) {
        document.getElementsByClassName("modal-cointainer")[0].style.display ="flex";
        document.getElementById("contact-Msg").innerHTML = `<span>We'll connect soon. &#128578;</span><button class="modal-btn" onClick="closeModal()">YUPPP!</button>`;
      } else {
        document.getElementsByClassName("modal-cointainer")[0].style.display = "flex";
        document.getElementById("contact-Msg").innerHTML = `<span>Your message wasn't sent. &#128566;<hr> You can try other options below!</span><button class="modal-btn" onClick="closeModal()">SURE</button>`;
      }
      setTimeout(() => {
        document.getElementsByClassName("modal-cointainer")[0].style.display ="none";
      }, 5000);
    });
  });
});

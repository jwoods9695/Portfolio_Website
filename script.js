const modalContainer = document.querySelector('.modal-container');
const headerLinks = document.querySelectorAll(".header-txt");
const mobileLinks = document.querySelectorAll(".modal-links");
const headerStar = document.querySelector(".header-img");
const homeTitle = document.querySelector(".home-title");
const homePara = document.querySelector(".home-paragraph");
const contactBtn = document.querySelector(".contact-btn");
const homeProjects = document.querySelectorAll(".project-container");
const menuIcon = document.querySelector(".bars-icon");
const contactArrow = document.querySelector(".arrow-icon");
const occupationText = document.getElementById("occupationText");
const finance_1 = document.getElementById("finance_1");
const film_1 = document.getElementById("film_1");
const aboutTitle = document.querySelector(".about-title");
const aboutHeadings = document.querySelectorAll(".about-headings");
const workLines = document.querySelector(".works-container");
const projBoxes = document.querySelectorAll(".project-box");
const conTitle = document.querySelector(".contact-title");
const socials = document.querySelectorAll(".social-wrapper");
const emailLink = document.querySelector(".email-link");
const socialFlex = document.querySelector(".socials-flex");
const hed1 = document.getElementById("hed1");

let arrowInt;
let arrowNum = 2;
let occNum = 2;
let imgNum = 2;

let pageSection = 0;

// adds mouse hover event listeners for 'View project' link //
document.querySelectorAll(".link-classes").forEach((linkWrp, idx) => {
    let linkClasses = document.querySelectorAll(".work-link");
    let linkText = document.querySelectorAll(".link-txt");
    linkWrp.addEventListener("mouseover", () => {
        if(window.innerWidth > 1280){
            linkClasses[idx].style.width = "168px";
            linkText[idx].style.paddingRight = "20px";
            linkWrp.style.color = "white";
        }
    });
    linkWrp.addEventListener("mouseout", () => {
        if(window.innerWidth > 1280){
            linkWrp.style.color = "#006eff";
            linkText[idx].style.paddingRight = "10px";
            linkClasses[idx].style.width = "43px";
        }
    });
});

// Controls 'View project' link styles when window in resized //
window.addEventListener("resize", () => {
    if(window.innerWidth < 1280){
        document.querySelectorAll(".link-classes").forEach(link => {
            link.style.color = "white";
        });
    } else {
        document.querySelectorAll(".link-classes").forEach(link => {
            link.style.color = "#006eff";
        });
    }
});

function toggleImages(){
    setInterval(() => {
        finance_1.style.opacity = "0";
        film_1.style.opacity = "0";
        if(imgNum % 2 == 0){
            setTimeout(() => {
                finance_1.src = "finance_videos.png";
                finance_1.style.opacity = "1";
                film_1.src = "documentaries_thumbnail.png";
                film_1.style.opacity = "1";
            }, 700);
        } else {
            setTimeout(() => {
                finance_1.src = "finance_2.png";
                finance_1.style.opacity = "1";
                film_1.src = "youtube_videos.png";
                film_1.style.opacity = "1";
            }, 700);
        }
        imgNum++;
    }, 4000);
}
function changeOccupation(){
    setInterval(() => {
        occupationText.style.transform = "scale(0)";
        occupationText.style.opacity = "0";
            setTimeout(() => {
                if(occNum % 2 == 0){
                    occupationText.textContent = "Freelancer";
                } else {
                    occupationText.textContent = "Video Editor";
                }
                occupationText.style.transform = "scale(1)";
                occupationText.style.opacity = "1";
                occNum++;
            }, 700);
    }, 4000);
}
function flickArrow(){
    setInterval(() => {
        if(arrowNum % 2 == 0){
            contactArrow.style.transform = "rotateX(180deg)";
        } else {
            contactArrow.style.transform = "rotateX(0deg)";
        }
        arrowNum++;
    }, 1000);
}
function loadAnimations(){
    // header animations //
    setTimeout(() => {
        headerLinks[0].style.opacity = "1";
    }, 500);
    setTimeout(() => {
        headerLinks[1].style.opacity = "1";
    }, 700);
    setTimeout(() => {
        headerStar.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
        headerLinks[2].style.opacity = "1";
    }, 1300);
    setTimeout(() => {
        headerLinks[3].style.opacity = "1";
    }, 1600);

    // home textcontent animations //
    setTimeout(() => {
        menuIcon.style.opacity = "1";
        menuIcon.style.left = "0px";
    }, 200);
    setTimeout(() => {
        homeTitle.style.opacity = "1";
        homeTitle.style.top = "0px";
    }, 500);
    setTimeout(() => {
        homePara.style.opacity = "1";
        homePara.style.top = "0px";
    }, 900);
    setTimeout(() => {
        contactBtn.style.opacity = "1";
        contactBtn.style.top = "0px";
    }, 1400);

    // home projectImg animations //
    setTimeout(() => {
        homeProjects.forEach(project => {
            project.style.opacity = "1";
            project.style.transform = "scale(1.0)";
            project.addEventListener("mouseover", () => {
                project.style.transform = "scale(0.95)";
            });
            project.addEventListener("mouseout", () => {
                project.style.transform = "scale(1.0)";
            });
            setTimeout(() => {
                project.style.transition = "0.3s ease";
            }, 100);
        });
    }, 1800);

    // set up aboutHeadings //
    aboutHeadings[0].style.left = "500px";
    aboutHeadings[1].style.right = "500px";
    aboutHeadings[2].style.left = "500px";
    aboutHeadings[3].style.right = "500px";
}
function displayContacts(){
    conTitle.style.opacity = "1";
    setTimeout(() => {
        socials[0].style.opacity = "1";
    }, 200);
    setTimeout(() => {
        socials[1].style.opacity = "1";
    }, 400);
    setTimeout(() => {
        emailLink.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
        socialFlex.style.gap = "36px";
    }, 1500);
}
window.addEventListener("scroll", () => {
    try{
    let entireHeight = document.body.scrollHeight;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let scrolled = window.scrollY;
    if((windowHeight + scrolled) >= (entireHeight - 50)){
        displayContacts();
    }
    if(windowWidth > 1520){
        // about headings //
        if((windowHeight + scrolled) > 1300){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1380){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1560){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1700){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1850){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 2050){
            workLines.style.width = "90%";
        }
        if((windowHeight + scrolled) > 2300){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2750){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3200){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3650){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 1521 && windowWidth > 1175){
        if((windowHeight + scrolled) > 1150){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1230){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1410){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1550){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1700){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 1900){
            workLines.style.width = "90%";
        }
        if((windowHeight + scrolled) > 2150){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2600){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3050){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3500){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 1176 && windowWidth > 845){
        if((windowHeight + scrolled) > 1060){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1145){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1300){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1455){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1610){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        // width + big text
        if(windowWidth > 955){
            if((windowHeight + scrolled) > 1810){
                workLines.style.width = "90%";
            }
            if((windowHeight + scrolled) > 2060){
                projBoxes[0].style.top = "0px";
                projBoxes[0].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 2450){
                projBoxes[1].style.top = "0px";
                projBoxes[1].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 2900){
                projBoxes[2].style.top = "0px";
                projBoxes[2].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 3400){
                projBoxes[3].style.top = "0px";
                projBoxes[3].style.opacity = "1";
            }
        // width + small text
        } else if(windowWidth < 956){
            if((windowHeight + scrolled) > 1680){
                workLines.style.width = "90%";
            }
            if((windowHeight + scrolled) > 2130){
                projBoxes[0].style.top = "0px";
                projBoxes[0].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 2620){
                projBoxes[1].style.top = "0px";
                projBoxes[1].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 3170){
                projBoxes[2].style.top = "0px";
                projBoxes[2].style.opacity = "1";
            }
            if((windowHeight + scrolled) > 3670){
                projBoxes[3].style.top = "0px";
                projBoxes[3].style.opacity = "1";
            }
        }
    } 
     else if(windowWidth < 846 && windowWidth > 750){
        if((windowHeight + scrolled) > 1630){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1700){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1810){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1900){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 2020){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 2200){
            workLines.style.width = "90%";
        }
        if((windowHeight + scrolled) > 2650){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3250){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3750){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 4250){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 751 && windowWidth > 660){
        if((windowHeight + scrolled) > 1530){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1600){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1710){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1800){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1920){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 2100){
            workLines.style.width = "95%";
        }
        if((windowHeight + scrolled) > 2550){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3150){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3650){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 4150){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 661 && windowWidth > 570){
        if((windowHeight + scrolled) > 1420){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1490){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1560){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1620){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1700){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 1900){
            workLines.style.width = "95%";
        }
        if((windowHeight + scrolled) > 2350){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2950){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3450){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3950){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 571 && windowWidth > 450){
        if((windowHeight + scrolled) > 1350){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1420){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1500){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1560){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1630){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 1700){
            workLines.style.width = "95%";
        }
        if((windowHeight + scrolled) > 2200){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2750){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3250){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3750){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 451 && windowWidth > 380){
        if((windowHeight + scrolled) > 1200){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1270){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1350){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1400){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1460){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 1600){
            workLines.style.width = "95%";
        }
        if((windowHeight + scrolled) > 2100){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2650){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3150){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3650){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    } else if(windowWidth < 381){
        if((windowHeight + scrolled) > 1140){
            aboutTitle.style.opacity = "1";
            aboutTitle.style.top = "0px";
        } 
        if((windowHeight + scrolled) > 1210){
            aboutHeadings[0].style.opacity = "1";
            aboutHeadings[0].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1290){
            aboutHeadings[1].style.opacity = "1";
            aboutHeadings[1].style.right = "0px";
        }
        if((windowHeight + scrolled) > 1340){
            aboutHeadings[2].style.opacity = "1";
            aboutHeadings[2].style.left = "0px";
        }
        if((windowHeight + scrolled) > 1400){
            aboutHeadings[3].style.opacity = "1";
            aboutHeadings[3].style.right = "0px";
        }

        if((windowHeight + scrolled) > 1500){
            workLines.style.width = "95%";
        }
        if((windowHeight + scrolled) > 2000){
            projBoxes[0].style.top = "0px";
            projBoxes[0].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 2550){
            projBoxes[1].style.top = "0px";
            projBoxes[1].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3050){
            projBoxes[2].style.top = "0px";
            projBoxes[2].style.opacity = "1";
        }
        if((windowHeight + scrolled) > 3550){
            projBoxes[3].style.top = "0px";
            projBoxes[3].style.opacity = "1";
        }
    }
} catch(error){
    console.error(error);
}
});
mobileLinks.forEach(element => {
    element.addEventListener("click", () => {
        closeModal();
    });
});
// call functions //
toggleImages();
changeOccupation();
setTimeout(flickArrow, 2000);
loadAnimations();

// open/close mobile navigation menu //
function displayModal(){
    modalContainer.style.left = "0vw";
}
function closeModal(){
    modalContainer.style.left = "-100vw";
}
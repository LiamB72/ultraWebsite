// Revolvers
const piercerVersionChanger = document.getElementById("piercerVersion");
const imageP = document.getElementById("piercerImage");
const marksmanVersionChanger = document.getElementById("marksmanVersion");
const imageM = document.getElementById("marksmanImage");
const sharpshooterVersionChanger = document.getElementById("sharpshooterVersion");
const imageS = document.getElementById("sharpshooterImage");

piercerVersionChanger.addEventListener("click", () => {
    if (piercerVersionChanger.textContent === "normal") {
        piercerVersionChanger.textContent = "alternate";
        piercerVersionChanger.style.color = "#ffae00";
        imageP.src = "images/weapons/revolver/alternates/AlternatePiercerHUDNew.webp";
    } else {
        piercerVersionChanger.textContent = "normal";
        piercerVersionChanger.style.color = "white";
        imageP.src = "images/weapons/revolver/PiercerHUDNew.webp";
    }
})
marksmanVersionChanger.addEventListener("click", () => {
    if (marksmanVersionChanger.textContent === "normal") {
        marksmanVersionChanger.textContent = "alternate";
        marksmanVersionChanger.style.color = "#ffae00";
        imageM.src = "images/weapons/revolver/alternates/AlternateMarksmanHUDNew.webp";
    } else {
        marksmanVersionChanger.textContent = "normal";
        marksmanVersionChanger.style.color = "white";
        imageM.src = "images/weapons/revolver/MarksmanHUDNew.webp";
    }
})
sharpshooterVersionChanger.addEventListener("click", () => {
    if (sharpshooterVersionChanger.textContent === "normal") {
        sharpshooterVersionChanger.textContent = "alternate";
        sharpshooterVersionChanger.style.color = "#ffae00";
        imageS.src = "images/weapons/revolver/alternates/AlternateSharpshooterHUD.webp";
    } else {
        sharpshooterVersionChanger.textContent = "normal";
        sharpshooterVersionChanger.style.color = "white";
        imageS.src = "images/weapons/revolver/SharpshooterRevolverHUD.webp";
    }
})

// Shotguns
const cejectVersionChanger = document.getElementById("cejectVersion");
const imageC = document.getElementById("cejectImage");
const pumpVersionChanger = document.getElementById("pumpVersion");
const imagePump = document.getElementById("pumpImage");
const sawedVersionChanger = document.getElementById("sawedVersion");
const imageSawed = document.getElementById("sawedImage");

cejectVersionChanger.addEventListener("click", () => {
    if (cejectVersionChanger.textContent === "normal") {
        cejectVersionChanger.textContent = "alternate";
        cejectVersionChanger.style.color = "#ffae00";
        imageC.src = "images/weapons/shotgun/alternates/Bluejackhammer_HUD.webp";
    } else {
        cejectVersionChanger.textContent = "normal";
        cejectVersionChanger.style.color = "white";
        imageC.src = "images/weapons/shotgun/CoreEjectHUDNew.webp";
    }
})
pumpVersionChanger.addEventListener("click", () => {
    if (pumpVersionChanger.textContent === "normal") {
        pumpVersionChanger.textContent = "alternate";
        pumpVersionChanger.style.color = "#ffae00";
        imagePump.src = "images/weapons/shotgun/alternates/Greenjackhammer_HUD.webp";
    } else {
        pumpVersionChanger.textContent = "normal";
        pumpVersionChanger.style.color = "white";
        imagePump.src = "images/weapons/shotgun/PumpChargeHUDNew.webp";
    }
})
sawedVersionChanger.addEventListener("click", () => {
    if (sawedVersionChanger.textContent === "normal") {
        sawedVersionChanger.textContent = "alternate";
        sawedVersionChanger.style.color = "#ffae00";
        imageSawed.src = "images/weapons/shotgun/alternates/Redjackhammer_HUD.webp";
    } else {
        sawedVersionChanger.textContent = "normal";
        sawedVersionChanger.style.color = "white";
        imageSawed.src = "images/weapons/shotgun/Sawed-On_Shotgun_HUD.webp";
    }
})

// Nailguns
const attractorVersionChanger = document.getElementById("attractorVersion");
const imageA = document.getElementById("attractorImage");
const overheatVersionChanger = document.getElementById("overheatVersion");
const imageO = document.getElementById("overheatImage");
const jumpVersionChanger = document.getElementById("jumpVersion");
const imageJ = document.getElementById("jumpImage");

attractorVersionChanger.addEventListener("click", () => {
    if (attractorVersionChanger.textContent === "normal") {
        attractorVersionChanger.textContent = "alternate";
        attractorVersionChanger.style.color = "#ffae00";
        imageA.src = "images/weapons/nailgun/alternates/AlternateAttractorHUDNew.webp";
    } else {
        attractorVersionChanger.textContent = "normal";
        attractorVersionChanger.style.color = "white";
        imageA.src = "images/weapons/nailgun/AttractorNailgunHUDNew.webp";
    }
})
overheatVersionChanger.addEventListener("click", () => {
    if (overheatVersionChanger.textContent === "normal") {
        overheatVersionChanger.textContent = "alternate";
        overheatVersionChanger.style.color = "#ffae00";
        imageO.src = "images/weapons/nailgun/alternates/AlternateOverheatHUDNew.webp";
    } else {
        overheatVersionChanger.textContent = "normal";
        overheatVersionChanger.style.color = "white";
        imageO.src = "images/weapons/nailgun/OverheatNailgunHUDNew.webp";
    }
})
jumpVersionChanger.addEventListener("click", () => {
    if (jumpVersionChanger.textContent === "normal") {
        jumpVersionChanger.textContent = "alternate";
        jumpVersionChanger.style.color = "#ffae00";
        imageJ.src = "images/weapons/nailgun/alternates/Alternate_Jumpstart_HUD.webp";
    } else {
        jumpVersionChanger.textContent = "normal";
        jumpVersionChanger.style.color = "white";
        imageJ.src = "images/weapons/nailgun/Jumpstart_Nailgun_HUD.webp";
    }
})

const revolverDiv = document.getElementById("revolvers");
const revB = document.getElementById("revolverButton");
const shotgunDiv = document.getElementById("shotguns");
const shotB = document.getElementById("shotgunButton");
const nailgunDiv = document.getElementById("nailguns");
const nailB = document.getElementById("nailgunButton");
const railcannonDiv = document.getElementById("railcannons");
const railB = document.getElementById("railcannonButton");
const rocketLauncherDiv = document.getElementById("rocketLaunchers");
const rocketB = document.getElementById("rocketLauncherButton");
const armsDiv = document.getElementById("arms");
const armsB = document.getElementById("armsButton");


revB.addEventListener("click", () => {
    revolverDiv.style.display = "block";
    shotgunDiv.style.display = "none";
    nailgunDiv.style.display = "none";
    railcannonDiv.style.display = "none";
    rocketLauncherDiv.style.display = "none";
    armsDiv.style.display = "none";
})
shotB.addEventListener("click", () => {
    revolverDiv.style.display = "none";
    shotgunDiv.style.display = "block";
    nailgunDiv.style.display = "none";
    railcannonDiv.style.display = "none";
    rocketLauncherDiv.style.display = "none";
    armsDiv.style.display = "none";
})
nailB.addEventListener("click", () => {
    revolverDiv.style.display = "none";
    shotgunDiv.style.display = "none";
    nailgunDiv.style.display = "block";
    railcannonDiv.style.display = "none";
    rocketLauncherDiv.style.display = "none";
    armsDiv.style.display = "none";
})
railB.addEventListener("click", () => {
    revolverDiv.style.display = "none";
    shotgunDiv.style.display = "none";
    nailgunDiv.style.display = "none";
    railcannonDiv.style.display = "block";
    rocketLauncherDiv.style.display = "none";
    armsDiv.style.display = "none";
})
rocketB.addEventListener("click", () => {
    revolverDiv.style.display = "none";
    shotgunDiv.style.display = "none";
    nailgunDiv.style.display = "none";
    railcannonDiv.style.display = "none";
    rocketLauncherDiv.style.display = "block";
    armsDiv.style.display = "none";
})
armsB.addEventListener("click", () => {
    revolverDiv.style.display = "none";
    shotgunDiv.style.display = "none";
    nailgunDiv.style.display = "none";
    railcannonDiv.style.display = "none";
    rocketLauncherDiv.style.display = "none";
    armsDiv.style.display = "block";
})

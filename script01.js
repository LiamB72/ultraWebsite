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
    revolverDiv.style.visibility = "visible";
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


const piercerDescription        = document.getElementById("piercerButton");
const marksmanDescription       = document.getElementById("marksmanButton");
const sharpshooterDescription   = document.getElementById("sharpshooterButton");

const cejectDescription         = document.getElementById("cejectButton");
const pumpDescription           = document.getElementById("pumpButton");
const sawedDescription          = document.getElementById("sawedButton");

const attractorDescription      = document.getElementById("attractorButton");
const overheatDescription       = document.getElementById("overheatButton");
const jumpDescription           = document.getElementById("jumpButton");

const electricDescription       = document.getElementById("electricButton");
const screwdriverDescription    = document.getElementById("screwdriverButton");
const maliciousDescription      = document.getElementById("maliciousButton");

const freezeDescription         = document.getElementById("freezeframeButton");
const srsCannonDescription      = document.getElementById("srsButton");
const firestarterDescription    = document.getElementById("firestarterButton");

const feedbackerDescription     = document.getElementById("feedbackerButton");
const knuckleDescription        = document.getElementById("knuckleButton");
const whiplashDescription       = document.getElementById("wiphlashButton");


const piercerText               = document.getElementById("piercerText");
const marksmanText              = document.getElementById("marksmanText");
const sharpshooterText          = document.getElementById("sharpshooterText");

const cejectText                = document.getElementById("cejectText");
const pumpText                  = document.getElementById("pumpText");
const sawedText                 = document.getElementById("sawedText");

const attractorText             = document.getElementById("attractorText");
const overheatText              = document.getElementById("overheatText");
const jumpText                  = document.getElementById("jumpText");

const electricText              = document.getElementById("electricText");
const screwdriverText           = document.getElementById("screwdriverText");
const maliciousText             = document.getElementById("maliciousText");

const freezeText                = document.getElementById("freezeText");
const srsText                   = document.getElementById("srsText");
const firestarterText           = document.getElementById("firestarterText");

const feedbackerText            = document.getElementById("feedbackerText");
const knuckleText               = document.getElementById("knuckleText");
const whiplashText              = document.getElementById("whiplashText");


piercerDescription.addEventListener("click", () => {
    if (piercerText.style.display === "block") {
        piercerText.style.display = "none";
    } else {
        piercerText.style.display = "block";
    }
})

marksmanDescription.addEventListener("click", () => {
    if (marksmanText.style.display === "block") {
        marksmanText.style.display = "none";
    } else {
        marksmanText.style.display = "block";
    }
})

sharpshooterDescription.addEventListener("click", () => {
    if (sharpshooterText.style.display === "block") {
        sharpshooterText.style.display = "none";
    } else {
        sharpshooterText.style.display = "block";
    }
})

cejectDescription.addEventListener("click", () => {
    if (cejectText.style.display === "block") {
        cejectText.style.display = "none";
    } else {
        cejectText.style.display = "block";
    }
})

pumpDescription.addEventListener("click", () => {
    if (pumpText.style.display === "block") {
        pumpText.style.display = "none";
    } else {
        pumpText.style.display = "block";
    }
})

sawedDescription.addEventListener("click", () => {
    if (sawedText.style.display === "block") {
        sawedText.style.display = "none";
    } else {
        sawedText.style.display = "block";
    }
})

attractorDescription.addEventListener("click", () => {
    if (attractorText.style.display === "block") {
        attractorText.style.display = "none";
    } else {
        attractorText.style.display = "block";
    }
})

overheatDescription.addEventListener("click", () => {
    if (overheatText.style.display === "block") {
        overheatText.style.display = "none";
    } else {
        overheatText.style.display = "block";
    }
})

jumpDescription.addEventListener("click", () => {
    if (jumpText.style.display === "block") {
        jumpText.style.display = "none";
    } else {
        jumpText.style.display = "block";
    }
})

electricDescription.addEventListener("click", () => {
    if (electricText.style.display === "block") {
        electricText.style.display = "none";
    } else {
        electricText.style.display = "block";
    }
})

screwdriverDescription.addEventListener("click", () => {
    if (screwdriverText.style.display === "block") {
        screwdriverText.style.display = "none";
    } else {
        screwdriverText.style.display = "block";
    }
})

maliciousDescription.addEventListener("click", () => {
    if (maliciousText.style.display === "block") {
        maliciousText.style.display = "none";
    } else {
        maliciousText.style.display = "block";
    }
})

freezeDescription.addEventListener("click", () => {
    if (freezeText.style.display === "block") {
        freezeText.style.display = "none";
    } else {
        freezeText.style.display = "block";
    }
})

srsCannonDescription.addEventListener("click", () => {
    if (srsText.style.display === "block") {
        srsText.style.display = "none";
    } else {
        srsText.style.display = "block";
    }
})

firestarterDescription.addEventListener("click", () => {
    if (firestarterText.style.display === "block") {
        firestarterText.style.display = "none";
    } else {
        firestarterText.style.display = "block";
    }
})

feedbackerDescription.addEventListener("click", () => {
    if (feedbackerText.style.display === "block") {
        feedbackerText.style.display = "none";
    } else {
        feedbackerText.style.display = "block";
    }
})

knuckleDescription.addEventListener("click", () => {
    if (knuckleText.style.display === "block") {
        knuckleText.style.display = "none";
    } else {
        knuckleText.style.display = "block";
    }
})

whiplashDescription.addEventListener("click", () => {
    if (whiplashText.style.display === "block") {
        whiplashText.style.display = "none";
    } else {
        whiplashText.style.display = "block";
    }
})
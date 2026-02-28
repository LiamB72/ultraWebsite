function queryID(id) {
  return document.getElementById(id);
}

function alternateVersionSwitcher(buttonId, imageId, normalSrc, altSrc) {
  const btn = queryID(buttonId);
  const img = queryID(imageId);
  const normalText = "normal";
  const altText = "alternate";
  const altColor = "#ffae00";
  const normalColor = "white";
  if (!btn || !img) return;
  // Event listener to change gun | image } from its normal to its alternate version and back
  //                              | text  }
  btn.addEventListener("click", () => {
    const isAltText = btn.textContent.trim() === normalText;
    btn.textContent = isAltText ? altText : normalText;
    btn.style.color = isAltText ? altColor : normalColor;
    img.src = isAltText ? altSrc : normalSrc;
  });
}

alternateVersionSwitcher(
  "piercerVersion",
  "piercerImage",
  "images/weapons/revolver/PiercerHUDNew.webp",
  "images/weapons/revolver/alternates/AlternatePiercerHUDNew.webp",
);

alternateVersionSwitcher(
  "marksmanVersion",
  "marksmanImage",
  "images/weapons/revolver/MarksmanHUDNew.webp",
  "images/weapons/revolver/alternates/AlternateMarksmanHUDNew.webp",
);

alternateVersionSwitcher(
  "sharpshooterVersion",
  "sharpshooterImage",
  "images/weapons/revolver/SharpshooterRevolverHUD.webp",
  "images/weapons/revolver/alternates/AlternateSharpshooterHUD.webp",
);

alternateVersionSwitcher(
  "cejectVersion",
  "cejectImage",
  "images/weapons/shotgun/CoreEjectHUDNew.webp",
  "images/weapons/shotgun/alternates/Bluejackhammer_HUD.webp",
);

alternateVersionSwitcher(
  "pumpVersion",
  "pumpImage",
  "images/weapons/shotgun/PumpChargeHUDNew.webp",
  "images/weapons/shotgun/alternates/Greenjackhammer_HUD.webp",
);

alternateVersionSwitcher(
  "sawedVersion",
  "sawedImage",
  "images/weapons/shotgun/Sawed-On_Shotgun_HUD.webp",
  "images/weapons/shotgun/alternates/Redjackhammer_HUD.webp",
);

alternateVersionSwitcher(
  "attractorVersion",
  "attractorImage",
  "images/weapons/nailgun/AttractorNailgunHUDNew.webp",
  "images/weapons/nailgun/alternates/AlternateAttractorHUDNew.webp",
);

alternateVersionSwitcher(
  "overheatVersion",
  "overheatImage",
  "images/weapons/nailgun/OverheatNailgunHUDNew.webp",
  "images/weapons/nailgun/alternates/AlternateOverheatHUDNew.webp",
);

alternateVersionSwitcher(
  "jumpVersion",
  "jumpImage",
  "images/weapons/nailgun/Jumpstart_Nailgun_HUD.webp",
  "images/weapons/nailgun/alternates/Alternate_Jumpstart_HUD.webp",
);

const weaponTypes = {
  revolverButton: "revolvers",
  shotgunButton: "shotguns",
  nailgunButton: "nailguns",
  railcannonButton: "railcannons",
  rocketLauncherButton: "rocketLaunchers",
  armsButton: "arms",
};

function displayWeapons(typeID) {
  Object.values(weaponTypes).forEach((id) => {
    const weaponID = queryID(id);
    if (!weaponID) 
        return;
    weaponID.style.display = id === typeID ? "block" : "none";
  });
}

// Using the function above, it enables the buttons to show their distinct weapon types.
Object.entries(weaponTypes).forEach(([btnId, divId]) => {
  const btn = queryID(btnId);
  if (!btn)
     return;
  btn.addEventListener("click", () => displayWeapons(divId));
});

// Huge ass table to avoid repeating code
const descriptionPairs = [
  ["piercerButton", "piercerText"],
  ["marksmanButton", "marksmanText"],
  ["sharpshooterButton", "sharpshooterText"],
  ["cejectButton", "cejectText"],
  ["pumpButton", "pumpText"],
  ["sawedButton", "sawedText"],
  ["attractorButton", "attractorText"],
  ["overheatButton", "overheatText"],
  ["jumpButton", "jumpText"],
  ["electricButton", "electricText"],
  ["screwdriverButton", "screwdriverText"],
  ["maliciousButton", "maliciousText"],
  ["freezeframeButton", "freezeText"],
  ["srsButton", "srsText"],
  ["firestarterButton", "firestarterText"],
  ["feedbackerButton", "feedbackerText"],
  ["knuckleButton", "knuckleText"],
  ["wiphlashButton", "whiplashText"],
];

// For each loop to give functionality to the "show description" buttons
descriptionPairs.forEach(([btnId, textId]) => {
  const btn = queryID(btnId);
  const txt = queryID(textId);
  if (!btn || !txt) 
    return;
  btn.addEventListener("click", () => {
    txt.style.display = txt.style.display === "block" ? "none" : "block";
  });
});

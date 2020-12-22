function handleAltroButtonClick(button, collapsableSectionId) {
    const collapsableSection = document.getElementById(collapsableSectionId);
    const sectionContentElements = collapsableSection.getElementsByClassName("collapsable-section-content");
    
    if (!sectionContentElements.length) {
        return;
    }

    const sectionContent = sectionContentElements.item(0);

    if (!sectionContent.style.display || sectionContent.style.display === "none") {
        sectionContent.style.display = "inline";
        button.textContent = "Mostra meno";
    } else {
        sectionContent.style.display = "none";
        button.textContent = "_ALTRO";
    }
}

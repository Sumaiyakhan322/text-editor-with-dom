// Define a utility function to set the font size for the selected text
function setFontSize(selectedElement, fontSize) {
    const start = selectedElement.selectionStart;
    const end = selectedElement.selectionEnd;
    const selectedText = selectedElement.value.substring(start, end);
    
    if (selectedText) {
        const styledText = `<span style="font-size: ${fontSize}px">${selectedText}</span>`;
        const newText = selectedElement.value.substring(0, start) + styledText + selectedElement.value.substring(end);
        selectedElement.innerHTML = newText;
    }
}

// Other utility functions can be defined here if needed

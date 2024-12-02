function changeTab(tabIndex) {
    // Hide all tab panels
    const allPanels = document.querySelectorAll('.tab-panel');
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab panel
    document.querySelectorAll('.tab-panel')[tabIndex].classList.add('active');
    
    // Highlight the selected tab
    document.querySelectorAll('.tab')[tabIndex].classList.add('active');
}

function runCode(questionIndex) {
    const code = document.getElementById(id).textContent;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}


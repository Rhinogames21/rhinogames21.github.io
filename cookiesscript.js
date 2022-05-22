var showStory = false;
var displayAll = false;
var currentStep = 'step1';

var steps = ['step1', 'step2', 'step3', 'step4', 'step5']

function toggleStory() {
    showStory = !showStory;
    if (showStory) {
        document.getElementById('story').style.height = "fit-content";
        document.getElementById('toggle').value = "Show less...";
    }
    else {
        document.getElementById('story').style.height = "100px";
        document.getElementById('toggle').value = "Show more...";
    }
}

function toggleStep(step) {
    for (let i in steps) {
        if (steps[i] === step) {
            document.getElementById(steps[i]).style.display = "inherit";
            currentStep = steps[i];
            displayAll = false;
            document.getElementById('DisplayAll').value = "Display All";
        }
        else {
            document.getElementById(steps[i]).style.display = "none";
        }
    }
}

function toggleAllSteps() {
    if (!displayAll) {
        for (let i in steps) {
            document.getElementById(steps[i]).style.display = "inherit";
        }
        displayAll = true;
        document.getElementById('DisplayAll').value = "Current Step";
    }
    else {
        toggleStep(currentStep);
        
    }    
}


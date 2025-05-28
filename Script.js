let firstText = document.getElementById("typing");
let input = firstText.firstChild;
let user = "guest@";
let lclHst = "LocalHost: $ ~";
//console.log(firstText.firstElementChild.textContent); gets the child item
let validInput = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let allPrompts = [];
let running = true;
let text = "";
const root = document.documentElement;




function outputUser(){
    let userDiv = document.createElement("p");
    userDiv.textContent = user;
    let localDiv = document.createElement("p");
    localDiv.textContent = lclHst;
    let userPrompt = document.createElement("p");
    userPrompt.textContent = text;

    let fullDiv = document.createElement("div");
    fullDiv.classList.add('terminal-line');
    userDiv.id = 'user';
    localDiv.id = 'lcl';
    userPrompt.id = 'prompt';

    fullDiv.appendChild(userDiv);
    fullDiv.appendChild(localDiv);
    fullDiv.appendChild(userPrompt);

    document.body.appendChild(fullDiv);
    allPrompts.push(fullDiv);
}



function checkInput(){
    switch(text.toLowerCase()){
        case "about me":
            let aboutDiv = document.createElement('div');
            let aboutP1 = document.createElement('p');
            aboutP1.textContent = "About Me";
            let aboutP2 = document.createElement('p');
            aboutP2.textContent = "_____________";
            let aboutP3 = document.createElement('p');
            aboutP3.textContent = "Hello, my name is Oskaras Zincenko. I am currently a sophomore attending Cleveland State University";
            let aboutP4 = document.createElement('p');
            aboutP4.textContent = "I am persuing a degree in Computer Science and a minor in mathematics";
            let aboutP5 = document.createElement('p');
            aboutP5.textContent = "I enjoy programming in my free time and am very passionate towards the degree";
            let aboutP6 = document.createElement('p');
            aboutP6.textContent = "I am currently looking for an internship in order to gain real world experience and get my foot in the door";
            let aboutP7 = document.createElement('p');
            aboutP7.textContent = "I work very well in teams and often enjoy finding ways to solve problems through collaboration or solo if needed";
            let aboutP8 = document.createElement('p');
            aboutP8.textContent = "Although I am a sophomore, the classes i am enrolled in this year are all junior or senior level classes";
            let aboutP9 = document.createElement('p');
            aboutP9.textContent = " ";
            let aboutP10 = document.createElement('p');
            aboutP10.textContent = "_____________";
            let aboutP11 = document.createElement('p');
            aboutP11.textContent = " ";
            let aboutP12 = document.createElement('p');
            aboutP12.textContent = "if you wish to see my CV or other links to my accounts please use the (contact) command,";
            let aboutP13 = document.createElement('p');
            aboutP13.textContent = "Thank you ";


            aboutDiv.appendChild(aboutP1);
            aboutDiv.appendChild(aboutP2);
            aboutDiv.appendChild(aboutP3);
            aboutDiv.appendChild(aboutP4);
            aboutDiv.appendChild(aboutP5);
            aboutDiv.appendChild(aboutP6);
            aboutDiv.appendChild(aboutP7);
            aboutDiv.appendChild(aboutP8);
            aboutDiv.appendChild(aboutP9);
            aboutDiv.appendChild(aboutP10);
            aboutDiv.appendChild(aboutP11);
            aboutDiv.appendChild(aboutP12);
            aboutDiv.appendChild(aboutP13);

            aboutDiv.classList.add('commands');
            
            document.body.appendChild(aboutDiv);
            allPrompts.push(aboutDiv);
            break;
        case "help":
            console.log("help");
            let helpDiv = document.createElement('div');
            let helpP1 = document.createElement('p');
            helpP1.textContent = "COMMANDS:";
            let helpP2 = document.createElement('p');
            helpP2.textContent = "___________________________________";
            let helpP3 = document.createElement('p');
            helpP3.textContent = "help: shows list of all current commands ";
            let helpP4 = document.createElement('p');
            helpP4.textContent = "contact: shows a list of sites you can reach me on";
            let helpP5 = document.createElement('p');
            helpP5.textContent = "clear: clears console of all inputs to make it clean";
            let helpP6 = document.createElement('p');
            helpP6.textContent = "themes: shows list of themes you can enable by typing theme-(theme name)";
            let helpP7 = document.createElement('p');
            helpP7.textContent = "projects: displays links to projects i have made or current ones i am working on ";
            let helpP8 = document.createElement('p');
            helpP8.textContent = "about me: shows some info about me and my goals ";
            let helpP9 = document.createElement('p');
            helpP9.textContent = "___________________________________";
            let helpP10 = document.createElement('p');
            helpP10.textContent = " ";
            
            
            helpDiv.appendChild(helpP1);
            helpDiv.appendChild(helpP2);
            helpDiv.appendChild(helpP3);
            helpDiv.appendChild(helpP4);
            helpDiv.appendChild(helpP5);
            helpDiv.appendChild(helpP6);
            helpDiv.appendChild(helpP7);
            helpDiv.appendChild(helpP8);
            helpDiv.appendChild(helpP9);
            helpDiv.appendChild(helpP10);

            helpDiv.classList.add('commands');
            
            document.body.appendChild(helpDiv);
            allPrompts.push(helpDiv);

            break;
        case "contact":
            let imgDiv = document.createElement('div');
            let cntDiv = document.createElement('div');
            let topDiv = document.createElement('div');
            let testA = document.createElement('a');
            let testA1 = document.createElement('a');
            let testA2 = document.createElement('a');

            let topP = document.createElement('p');
            let topP1 = document.createElement('p');
            topP.textContent = "Contact me here:";
            topP1.textContent = "______________________";
            topDiv.appendChild(topP);
            topDiv.appendChild(topP1);

            let img1 = document.createElement('img');
            let img2 = document.createElement('img');
            let img3 = document.createElement('img');
            testA.appendChild(img1);
            testA1.appendChild(img2);
            testA2.appendChild(img3);
            img1.src = 'git.png';
            img2.src = 'hand.png';
            img3.src = 'link.png';
            img1.width = 60;
            img1.height = 60;
            img2.width = 60;
            img2.height = 60;
            img3.width = 60;
            img3.height = 60;
            imgDiv.appendChild(testA);
            imgDiv.appendChild(testA1);
            imgDiv.appendChild(testA2);
            
            let cntP = document.createElement('p');
            let cntP1 = document.createElement('p');
            cntP.textContent = "Phone: 267 752 6400";
            cntP1.textContent = "Email: oskaraszincenko500@gmail.com";
            cntDiv.appendChild(cntP);
            cntDiv.appendChild(cntP1);

            imgDiv.classList.add('commands');
            cntDiv.classList.add('commands');
            topDiv.classList.add('commands');

            document.body.appendChild(topDiv);
            document.body.appendChild(imgDiv);
            document.body.appendChild(cntDiv);

            allPrompts.push(topDiv);
            allPrompts.push(imgDiv);
            allPrompts.push(cntDiv);

            testA.href = 'https://github.com/OskarZ100';
            testA1.href = 'https://csuohio.joinhandshake.com/explore';
            testA2.href = 'https://www.linkedin.com/in/oskaras-zincenko-9a9139350/';

            console.log("contact");
            break;
        case "themes":
            //type themes-(name) for the theme name to remove all new input deteciton 
            let themeDiv = document.createElement('div');
            let themeP1 = document.createElement('p');
            themeP1.textContent = "THEMES:";
            let themeP2 = document.createElement('p');
            themeP2.textContent = "________________________";
            let themeP3 = document.createElement('p');
            themeP3.textContent = "Light - theme-light ";
            let themeP4 = document.createElement('p');
            themeP4.textContent = "Cool - theme-cool";
            let themeP5 = document.createElement('p');
            themeP5.textContent = "Hot - theme-hot ";
            let themeP6 = document.createElement('p');
            themeP6.textContent = "original - theme-norm";
            let themeP7 = document.createElement('p');
            themeP7.textContent = "________________________";
            let themeP8 = document.createElement('p');
            themeP8.textContent = " ";

            themeDiv.appendChild(themeP1);
            themeDiv.appendChild(themeP2);
            themeDiv.appendChild(themeP3);
            themeDiv.appendChild(themeP4);
            themeDiv.appendChild(themeP5);
            themeDiv.appendChild(themeP6);
            themeDiv.appendChild(themeP7);
            themeDiv.appendChild(themeP8);

            themeDiv.classList.add('commands');
            
            document.body.appendChild(themeDiv);
            allPrompts.push(themeDiv);
            console.log("theme");
            break;
        case "projects":
            
            console.log("project");
            break;
        case "clear":
            for(objects in allPrompts){
                allPrompts[objects].remove();
            }
            allPrompts = [];
            break;
        case "theme-hot":
            //var prompts = document.getElementsByClassName('col1');
            document.documentElement.style.setProperty('--main-txt', 'rgb(235, 192, 0)');
            document.documentElement.style.setProperty('--main-usr', 'rgb(255, 0, 0)');
            document.documentElement.style.setProperty('--main-lcl', 'rgb(255, 249, 66)');
            document.documentElement.style.setProperty('--main-hglt', 'crimson');
            document.body.style.backgroundColor = 'var(--hot-bkg)';
            break;
        case "theme-cool":
            document.documentElement.style.setProperty('--main-txt', 'rgba(202, 237, 232, 1)');
            document.documentElement.style.setProperty('--main-usr', 'rgba(255, 157, 0, 1)');
            document.documentElement.style.setProperty('--main-lcl', 'rgba(0, 255, 184, 1)');
            document.documentElement.style.setProperty('--main-hglt', 'rgb(74, 46, 255)');
            document.body.style.backgroundColor = 'var(--cool-bkg)';
            break;
        case "theme-light":
            document.documentElement.style.setProperty('--main-txt', 'rgba(72, 75, 75, 1)');
            document.documentElement.style.setProperty('--main-usr', 'rgba(255, 0, 209, 1)');
            document.documentElement.style.setProperty('--main-lcl', 'rgba(0, 39, 255, 1)');
            document.documentElement.style.setProperty('--main-hglt', 'rgb(239, 137, 255)');
            document.body.style.backgroundColor = 'var(--light-bkg)';
            break;
        case "theme-norm":
            document.documentElement.style.setProperty('--main-txt', 'rgba(255, 222, 181, 1)');
            document.documentElement.style.setProperty('--main-usr', 'rgba(0, 254, 24, 0.8)');
            document.documentElement.style.setProperty('--main-lcl', 'rgba(255, 137, 31, 0.8)');
            document.documentElement.style.setProperty('--main-hglt', 'white');
            document.body.style.backgroundColor = 'var(--main-bkg)';
            break;
        case "theme-neon":
            document.documentElement.style.setProperty('--main-txt', 'rgb(203, 203, 203)');
            document.documentElement.style.setProperty('--main-usr', 'rgb(47, 47, 47)');
            document.documentElement.style.setProperty('--main-lcl', 'rgb(255, 0, 111)');
            document.documentElement.style.setProperty('--main-hglt', 'rgb(239, 137, 255)');
            document.body.style.backgroundColor = 'rgb(0, 121, 151)';
            break;
        default:
            let defaultDiv = document.createElement('div');
            let defTxt = document.createElement('p');
            let defBreak = document.createElement('p');
            defBreak.textContent = "_____________________________________________________________________";
            defTxt.textContent = "Unknown command please use 'help' if you are not sure of the commands";
            defaultDiv.classList.add('commands');
            defaultDiv.appendChild(defTxt);
            defaultDiv.appendChild(defBreak);
            document.body.appendChild(defaultDiv);
            allPrompts.push(defaultDiv);
            break;
    }
}

function reset(){
    let scndText = document.createElement('div'); 
    firstText.id = 'typing';
    let firstTextP = document.createElement('p');
    firstTextP.textContent = "(click here to type)";
    firstTextP.id = 'unclicked';
    scndText.appendChild(firstTextP);
    document.body.appendChild(scndText);
    input = scndText.firstChild;
    firstText.removeEventListener('click', clickEvent());
    firstText = scndText;
    scndText.addEventListener('click', clickEvent());
}

function listenTyping(){
    if(event.key == "Enter"){
        input.textContent = text;
        running = false;
        //have to create an entire div and everrything make a new function for when its not running instead of setting to false
        //so you can just go to that functuon and continue the whole process
        //at the end make a restart function to reset all values
        outputUser();
        checkInput();
        firstText.remove();
        document.removeEventListener('keydown', listenTyping);
        reset();
    }else{
        for(str in validInput){
            let check = validInput[str];
            if(event.key == check){
                text += check;
            }
        }
        input.textContent = text;
    }
    if(event.key == " "){
        text += " ";
        input.textContent = text;
    }
    if(event.key === "Backspace" ){
        text = text.slice(0,text.length-1);
        input.textContent = text;
    }
}




firstText.addEventListener('click', clickEvent());


function clickEvent(){
    text = "";
    input.id = "clicked";
    input.textContent = "|";
    document.addEventListener('keydown', listenTyping);
}


function takeToPage(num){
    console.log('yo');
    if(num == 1){
        window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank').focus();
        
    }
    if(num == 2){

    }
    if(num == 3){

    }
}
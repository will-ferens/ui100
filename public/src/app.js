import projectContents from './projects.js';

const projectList = document.querySelector('#project-list');


projectContents.forEach(current => {
    console.log(current)
    let element = document.createElement('div');
    
    element.className = 'project-item';
    
    let heading = document.createElement('h4');
    heading.innerHTML = current.title;
    element.appendChild(heading);

    let image = document.createElement('img');
    image.src = current.thumbnail;
    element.appendChild(image);

    let description = document.createElement('p');
    description.innerHTML = current.description;
    element.appendChild(description);

    projectList.appendChild(element);

})

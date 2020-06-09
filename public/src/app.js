import projectContents from './projects.js';

const projectList = document.querySelector('#project-list');


projectContents.forEach(current => {
    let element = document.createElement('div');
    
    element.className = 'project-item';

    let link = document.createElement('a');
    link.href = current.url;
    element.appendChild(link)
    
    let heading = document.createElement('h4');
    heading.innerHTML = current.title;
    link.appendChild(heading);

    let image = document.createElement('div');
    image.classList = 'preview-img';
    image.style.backgroundImage = `url(${current.thumbnail})`;
    link.appendChild(image);

    let description = document.createElement('p');
    description.innerHTML = current.description;
    link.appendChild(description);

    projectList.appendChild(element);

});
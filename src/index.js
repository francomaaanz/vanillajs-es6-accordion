import './sass/index.scss'
import Accordion from './components/Accordion';
import AccordionDynamic from './components/AccordionDynamic';
import * as Http from './utils/Http'
import * as Const from './utils/Constants'

const configAccordion = {
  mainClass: 'testMainClass',
  containerClassName: 'testContainerClass',
  headerClassName: 'testHeaderClass',
  contentClassName: 'testContentClass',
  classActive: ' is-active',
  data: [
    { title: 'title 1 from config', content: "content 1 from config ", active: true },
    { title: 'title 2 from config', content: "content 2 from config ", active: false },
    { title: 'title 3 from config', content: "content 3 from config ", active: false },
    { title: 'title 4 from config', content: "content 4 from config ", active: false }
  ]
}

const el = document.getElementById('accordion1');
const el2 = document.getElementById('accordion2');

new Accordion(el);
new AccordionDynamic(el2, configAccordion);

const btn = document.getElementById('btn1');
let incremental = 6;

btn.addEventListener('click', e => {

  if (incremental === 9) {
    return alert('No more data to fetch! Please reload the browser.')
  }

  const url = `${Const.url_domain}movie/35${incremental}286?${Const.api_key}`;
  
  Http.doGet(url, populateNewSection, Http.errorHandler, el);
  incremental++;
})


function populateNewSection(data, elm) {

  const container = elm;
  let newContent = "";
  const template = `
    <dt class="Accordion-panel"> ${data && data.title}</dt>
    <dd class="Accordion-content">
      <p>
      ${data && data.overview}
      </p>
    </dd> 
`;
  newContent = container.innerHTML + template;
  container.innerHTML = newContent;
}

/*
Another implementation which is only faster in IE and Edge

function createAccordionSection(data, elm) {
  const header = document.createElement('dt')  
  const section = document.createElement('dd')  
  const p  = document.createElement('p')
  const contentText = data && data.overview || "No overview content fetch"
  const headerText = data && data.title || "No title fetch"
  const textNodeHeader = document.createTextNode(headerText)
  const textNodeSection = document.createTextNode(contentText)

  header.classList.add('accordion-panel')
  section.classList.add('accordion-content')  
  p.appendChild(textNodeSection); 
  section.appendChild(p)
  header.appendChild(textNodeHeader)
  elm.appendChild(header)
  elm.appendChild(section)
}
*/

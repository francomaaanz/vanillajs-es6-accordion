import { isObject, isArray } from "util";

class AccordionDynamic {
    constructor(el, opt) {
        this.el = el;
        this.elId = el.id;
        this.accordionTriggerCB = this.accordionTriggerCB.bind(this);
        this._render = this._render.bind(this);
        this.init = this.init.bind(this);

        this.props = isObject(opt) && opt || null;        

        this.init()
    }

    hideContent(el) {
        el.classList.remove('accordion-panel--active')
    }


    showContent(el, id) {
        const selector = `#${id} dt.accordion-panel--active`
        const showElement =  document.querySelector(selector) 

        if(showElement) showElement.classList.remove('accordion-panel--active')
        el.classList.add('accordion-panel--active')
    }

    accordionTriggerCB(event) {
        const el = event.target;
        const nodeId = el.parentNode.id;

        if (nodeId == this.elId.toString()) {
            const id = this.elId;

            if (el.classList.contains('accordion-panel--active')) {
                this.hideContent(el)
            } else {
                this.showContent(el, id)
            }
        }
    }

    init() {
        try {
            if (!this.props) {
                throw new Error('Please, check the provided accordion configuration.')                
            }         

            this._render(this.props)

            document.addEventListener('click', this.accordionTriggerCB, false);
        } catch (err) {
            console.error('Accordion main class Err => ', err);
        }
    }   

    _render(opt) {        
        if(opt.data.length === 0) {
            this.el.innerHTML = `<p class="accordion-noData">No data to load</p>`
        } else {
            return isArray(opt.data) && opt.data.map(section => {            
                const template = `
                <dt class="${opt.headerClassName ? `opt.headerClassName ${opt.headerClassName}` : "" }${section.active ? opt.classActive : ''}"> ${section.title}</dt>
                <dd class="${opt.contentClassName ? `opt.contentClassName ${opt.contentClassName}` : ""}">
                    <p>
                    ${section.content}
                    </p>
                </dd> 
                `;
    
                this.el.innerHTML += template;
            })
        }
        
    }
}

export default AccordionDynamic;
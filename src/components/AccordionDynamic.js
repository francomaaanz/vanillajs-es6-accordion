    import { isObject, isArray } from "util";

    class AccordionDynamic {
        constructor(el, opt) {
            this.el = el;
            this.elId = el.id;
            this.elementSelected = null

            this.props = isObject(opt) && opt || null;        

            this.init()
        }

        hideContent(el) {
            el.classList.remove('is-active')
        }


        showContent(el) {
            if(this.elementSelected) {
                this.elementSelected.classList.remove('is-active')
            }            
                
            el.classList.add('is-active')
            this.elementSelected = el
        }

        accordionTriggerCB = (event) => {
            const el = event.target;
            const nodeId = el.parentNode.id;

            if (nodeId == this.elId.toString()) {
                const id = this.elId;

                if (el.classList.contains('is-active')) {
                    this.hideContent(el)
                } else {
                    this.showContent(el)
                }
            }
        }

        init = () => {
            try {
                if (!this.props) {
                    throw new Error('Please, check the provided accordion configuration.')                
                }         

                this.render(this.props)

                document.addEventListener('click', this.accordionTriggerCB, false);
            } catch (err) {
                console.error('Accordion main class Err => ', err);
            }
        }   

        render = (opt) =>  {        
            if(opt.data && opt.data.length === 0) {
                this.el.innerHTML = `<p class="Accordion-noData">No data to load</p>`
            } else {
                return isArray(opt.data) && opt.data.map((section, index) => {

                    const template = `
                    <dt class="Accordion-panel${opt.headerClassName ? ` ${opt.headerClassName}` : "" }${section.active ? opt.classActive : ''}"> ${section.title}</dt>
                    <dd class="Accordion-content${opt.contentClassName ? ` ${opt.contentClassName}` : ""}">
                        <p>
                        ${section.content}
                        </p>
                    </dd> 
                    `;                
                    this.el.innerHTML += template;
                    
                    if(opt.classActive) {
                        const id = this.elId;                    
                        this.elementSelected = document.querySelector(`#${id} .Accordion-panel.is-active`);
                    }
                })
            }
            
        }
    }

    export default AccordionDynamic;

class Accordion {
    constructor(el) {
        this.el = el
        this.elId = el.id
        this.elementSelected = null
        this.accordionTriggerCB = this.accordionTriggerCB.bind(this)
        
        this.init()
    }

    hideContent(el) {
        el.classList.remove('accordion-panel--active')
    }

    showContent(el, id) {        
        if(this.elementSelected) {
            this.elementSelected.classList.remove('accordion-panel--active')
        }                
        el.classList.add('accordion-panel--active')
        this.elementSelected = el
    }

    accordionTriggerCB(event) {
        event.stopPropagation()

        const el = event.target
        const nodeId = el.parentNode.id

        if (nodeId == this.elId.toString()) {
            const id = this.elId

            if (el.classList.contains('accordion-panel--active')) {
                this.hideContent(el)
            } else {
                this.showContent(el, id)
            }
        }
    }
    
    init() {        
        try {            
            if(this.elId) {
                const container = this.el
                container.addEventListener('click', this.accordionTriggerCB, false)
            } else {
                throw new Error('Please, use an #id selctor for get the component working.')                
            }            
        } catch (err) {
            console.error('Accordion main class Err => ', err)
        }
    }
}

export default Accordion
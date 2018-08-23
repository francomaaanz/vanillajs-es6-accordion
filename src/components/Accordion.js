class Accordion {
    constructor(el) {
        this.el = el
        this.elId = el.id
        this.elementSelected = null
        this.accordionTriggerCB = this.accordionTriggerCB.bind(this)
        
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

    accordionTriggerCB(event) {
        event.stopPropagation()

        const el = event.target
        const nodeId = el.parentNode.id

        if (nodeId == this.elId.toString()) {
            const id = this.elId

            if (el.classList.contains('is-active')) {
                this.hideContent(el)
            } else {
                this.showContent(el)
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
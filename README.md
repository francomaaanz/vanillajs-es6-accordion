# ES6 & Sass Accordion component


```
 npm install
 npm run start
 ```

The `"accordion.js"`  file will be generated in `"./dist"` folder. Once generated add it to the html file for being use.

 e2e test

 ```
 npm run e2e-test
 ```


 To see the accordion working:
 
 ```
 https://francomaaanz.github.io/vanillajs-es6-accordion/
 ```

The project contains 3 types of accordions:

1. Standar accordion which not acept config.
1. Accordion that accepts config for rendering content and custom css classes. (AccordionDynamic.js)
1. only html and css without JS.


## Accordion 1

HTML Mark up:

```html
<div class="accordion">
  <dl class="accordion-container" id="accordion1">
    <dt class="accordion-panel">Title</dt>
    <dd class="accordion-content">
      <p>text</p>
    </dd>
    <dt class="accordion-panel">Title</dt>
    <dd class="accordion-content">
      <p>text</p>
    </dd>
    <dt class="accordion-panel">Title</dt>
    <dd class="accordion-content">
      <p>text</p>
    </dd>
  </dl>
</div>
```

Init Accordion

```javascript
const el = document.getElementById('accordion1');
new Accordion(el);
```

## Accordion 2 - Dynamic

Init example

```javascript
const configAccordion = {
  containerClassName: 'accordion-container',
  mainClass: 'accordion',
  headerClassName: 'accordion-panel',
  contentClassName: 'accordion-content',
  classActive: ' accordion-panel--active',
  data: [
    { title: 'title 1 from config', content: "content 1 from config ", active: true },
    { title: 'title 2 from config', content: "content 2 from config ", active: false },
    { title: 'title 3 from config', content: "content 3 from config ", active: false },
    { title: 'title 4 from config', content: "content 4 from config ", active: false }
  ]
}
const el2 = document.getElementById('accordion2');
new AccordionDynamic(el2, configAccordion);
```

HTML Mark up:

```html
<div class="accordion">
    <dl class="accordion-container" id="accordion2">
    
    </dl>
</div>
```

## Accordion without js

HTML Mark up:

```html
<div class="accordion no-js">
    <div class="accordion__container">
        <div class="accordionItemWrapper">
            <label for="chbox1" class="accordionLabelTrigger ripple">Section 1</label>
            <input type="checkbox" class="accordionIpt" id="chbox1">
            <div class="accordion-content">
            <p>Section 1 Content...</p>
            </div>
        </div>

        <div class="accordionItemWrapper">
            <label for="chbox2" class="accordionLabelTrigger ripple">Section 2</label>
            <input type="checkbox" class="accordionIpt" id="chbox2">
            <div class="accordion-content">
            <p>Section 2 Content...</p>
            </div>
        </div>

        <div class="accordionItemWrapper">
            <label for="chbox3" class="accordionLabelTrigger ripple">Section 3</label>
            <input type="checkbox" class="accordionIpt" id="chbox3">
            <div class="accordion-content">
            <p>Section 3 Content...</p>
            </div>
        </div>
    </div>
</div>
```

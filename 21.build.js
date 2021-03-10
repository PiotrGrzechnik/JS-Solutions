(self.webpackChunkjs_solutions=self.webpackChunkjs_solutions||[]).push([[21],{18021:(e,t,n)=>{"use strict";n.r(t),n.d(t,{basic:()=>s});var o=n(91713),s=[{category:o.Category.JAVASCRIPT,subcategory:o.JSSubcategory.BROWSER,title:"Get scroll position of the current page",codes:[{key:"1",code:"\nconst getScrollPosition = (el = window) => ({\n  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n});\n      ",usage:"\ngetScrollPosition();\n// {x: 0, y: 200}\n\nconst element = document.getElementById('element');\ngetScrollPosition(element);\n// {x: 30, y: 40}\n      "}]},{category:o.Category.JAVASCRIPT,subcategory:o.JSSubcategory.BROWSER,title:"Intersection Observer - observe visibility change of an element in the viewport",description:"\n### Documentation:\n- [MDN IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)\t\n- [MDN IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)\t\n\n\n### Real examples:\n- [Example 1](https://codepen.io/SimonEvans/pen/Qqjxde)\n\n\t\t",codes:[{key:"1",title:"Overview",code:"\nconst observer = new IntersectionObserver(changes => {\n\tfor (const change of changes) {\n\t\tconsole.log(change.time);               // Timestamp when the change occurred\n\t\tconsole.log(change.rootBounds);         // Unclipped area of root\n\t\tconsole.log(change.boundingClientRect); // target.boundingClientRect()\n\t\tconsole.log(change.intersectionRect);   // boundingClientRect, clipped by its containing block ancestors, and intersected with rootBounds\n\t\tconsole.log(change.intersectionRatio);  // Ratio of intersectionRect area to boundingClientRect area\n\t\tconsole.log(change.isIntersecting);     // true - is in view / false = isn't in view\n\t\tconsole.log(change.target);             // the Element target\n\t}\n}, {});\n      ",usage:"\n// Watch for intersection events on a specific target Element.\n\nconst target = document.getElementById('target')\n\nobserver.observe(target);\n      "},{key:"2",title:"Simple",code:'\nconst observer = new IntersectionObserver(elements => {\n\tif (elements[0].intersectionRatio !== 0) {\n\t\tconsole.log("The element is in view!");\n\t} else {\n\t\tconsole.log("The element is out of view")\n\t}\n})\n      ',usage:"\nconst target = document.getElementById('target');\n\nobserver.observe(target);\n      "}]}]}}]);
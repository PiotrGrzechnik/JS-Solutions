(self.webpackChunkjs_solutions=self.webpackChunkjs_solutions||[]).push([[102,449],{16449:(r,t,e)=>{"use strict";e.r(t),e.d(t,{basic:()=>a});var n=e(91713),a=[{category:n.Category.JAVASCRIPT,subcategory:n.JSSubcategory.ARRAY,title:"Remove duplicates from an array",codes:[{key:"1",title:"filter",code:"\nconst removeDuplicatesFromArray = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)\n\t\t\t\t",usage:"\nconst arr = ['one','two','one']\n\nremoveDuplicatesFromArray(arr)\n\n// ['one','two']\n    \t\t"},{key:"2",title:"Set",code:"\nconst removeDuplicatesFromArray = [...new Set(arr)]\n    ",usage:"\nconst arr = ['one','two','one']\n\nremoveDuplicatesFromArray = [...new Set(arr)]\n\n// ['one','two']\n    "},{key:"3",title:"classic",code:"\nconst removeDuplicatesFromArray = (arr) => {\n\tlet unique = {};\n\tarr.forEach((item) => {\n\t\tif(!unique[item]) {\n\t\t\tunique[item] = true;\n\t\t}\n\t});\n\n\treturn Object.keys(unique);\n}\n    ",usage:"\nconst arr = ['one','two','one']\n\nremoveDuplicatesFromArray(arr)\n\n// ['one','two']\n    "}]},{category:n.Category.JAVASCRIPT,subcategory:n.JSSubcategory.ARRAY,title:"Count element occurrences in an array",codes:[{key:"1",title:"reduce",code:"\nconst countOccurrences = (arr, val) => arr.reduce((acc, item) => (item === val ? acc + 1 : acc), 0)\n    ",usage:"\nconst arr = [1, 1, 2, 1, 2, 3]\n\ncountOccurrences(arr, 1)\n\n// 3\n    "}]},{category:n.Category.JAVASCRIPT,subcategory:n.JSSubcategory.ARRAY,title:"Split array to two arrays based on condition",description:"\n### Explanation:\n1. Take each item from array and invoke provided function with item as parameter\n2. If function return true add to first array\n3. If function return false add to second array\n4. Return array of two arrays\n\t\t\n\t\t\t\t",codes:[{key:"1",title:"reduce",code:"\nconst bifurcateBy = (arr, fn) =>\n\tarr.reduce((acc, val, i) =>\n\t\t(acc[fn(val, i) ? 0 : 1].push(val), acc)\n\t,[[], []])\n\t\t",usage:"\nconst arr = ['beep', 'boop', 'foo', 'bar']\nconst func = x => x[0] === 'b'\n\nbifurcateBy(arr, func)\n\n// [['beep', 'boop', 'bar'], ['foo']]\n    "}]}]},23102:(r,t,e)=>{"use strict";function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}e.r(t),e.d(t,{solutions:()=>o});var a,o=function(r){if(Array.isArray(r))return n(r)}(a=e(16449).basic)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(a)||function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}]);
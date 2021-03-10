(self.webpackChunkjs_solutions=self.webpackChunkjs_solutions||[]).push([[522],{32522:(n,t,e)=>{"use strict";e.r(t),e.d(t,{basic:()=>u});var s=e(91713),u=[{category:s.Category.REACT,subcategory:s.ReactType.HOOKS,title:"Check if component is mounted",codes:[{key:"1",code:"\nconst useIsMountedRef = () => {\n\tconst isMounted = useRef(false);\n\n\tuseEffect(() => {\n\t\tisMounted.current = true;\n\n\t\treturn () => {\n\t\t\tisMounted.current = false;\n\t\t};\n\t}, []);\n\n\treturn isMounted;\n}\n      ",usage:"\n// In component:\n\nconst isMounted = useIsMountedRef();\n\n...\n\nif (isMounted.current) {\n\t// do stuff\n}\n      "}]}]}}]);
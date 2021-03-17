(self.webpackChunkjs_solutions=self.webpackChunkjs_solutions||[]).push([[522],{32522:(t,e,n)=>{"use strict";n.r(e),n.d(e,{basic:()=>s});var o=n(91713),s=[{category:o.Category.REACT,subcategory:o.ReactType.HOOKS,title:"Check if component is mounted",codes:[{key:"1",code:"\nconst useIsMountedRef = () => {\n\tconst isMounted = useRef(false);\n\n\tuseEffect(() => {\n\t\tisMounted.current = true;\n\n\t\treturn () => {\n\t\t\tisMounted.current = false;\n\t\t};\n\t}, []);\n\n\treturn isMounted;\n}\n      ",usage:"\n// In component:\n\nconst isMounted = useIsMountedRef();\n\n...\n\nif (isMounted.current) {\n\t// do stuff\n}\n      "}]},{category:o.Category.REACT,subcategory:o.ReactType.HOOKS,title:"Keep previous value",icon:"las la-undo-alt",codes:[{key:"1",code:"\nconst usePrevious = (value) => {\n\tconst ref = React.useRef()\n\n\tReact.useEffect(() => {\n\t\tref.current = value\n\t})\n\n\treturn ref.current\n}\n      ",usage:"\n// In component:\n\nconst lastValue = usePrevious(value)\n      "}]},{category:o.Category.REACT,subcategory:o.ReactType.HOOKS,title:"Mouse position hook",icon:"las la-mouse-pointer",codes:[{key:"1",code:'\nconst useMousePosition = () => {\n\tconst [mousePosition, setMousePosition] = useState({})\n\n\tuseEffect(() => {\n\t\tconst getMousePosition = e => {\n\t\t\tconst posX = e.clientX\n\t\t\tconst posY = e.clientY\n\t\t\tsetMousePosition({ posX, posY })\n\t\t}\n\n\t\tdocument.addEventListener("mousemove", getMousePosition)\n\n\t\treturn function cleanup() {\n\t\t\tdocument.removeEventListener("mousemove", getMousePosition)\n\t\t}\n\t})\n\n\treturn mousePosition\n}\n      ',usage:"\n// In component:\n\nconst { posX, posY } = useMousePosition()\n\n      "}]}]}}]);
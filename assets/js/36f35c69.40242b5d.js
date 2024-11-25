"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[242],{24591:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"interfaces/Evaluator","title":"Evaluator","description":"@ai16z/eliza v0.1.4-alpha.3 / Evaluator","source":"@site/api/interfaces/Evaluator.md","sourceDirName":"interfaces","slug":"/interfaces/Evaluator","permalink":"/eliza/api/interfaces/Evaluator","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"EvaluationExample","permalink":"/eliza/api/interfaces/EvaluationExample"},"next":{"title":"GenerationOptions","permalink":"/eliza/api/interfaces/GenerationOptions"}}');var a=i(74848),l=i(28453);const r={},d="Interface: Evaluator",t={},c=[{value:"Properties",id:"properties",level:2},{value:"alwaysRun?",id:"alwaysrun",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"similes",id:"similes",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"examples",id:"examples",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"handler",id:"handler",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"validate",id:"validate",level:3},{value:"Defined in",id:"defined-in-6",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/eliza/api/",children:"@ai16z/eliza v0.1.4-alpha.3"})," / Evaluator"]}),"\n",(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"interface-evaluator",children:"Interface: Evaluator"})}),"\n",(0,a.jsx)(n.p,{children:"Evaluator for assessing agent responses"}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"alwaysrun",children:"alwaysRun?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"alwaysRun"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Whether to always run"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L414",children:"packages/core/src/types.ts:414"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"description"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Detailed description"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L417",children:"packages/core/src/types.ts:417"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"similes",children:"similes"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"similes"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Similar evaluator descriptions"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L420",children:"packages/core/src/types.ts:420"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"examples"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"examples"}),": ",(0,a.jsx)(n.a,{href:"/eliza/api/interfaces/EvaluationExample",children:(0,a.jsx)(n.code,{children:"EvaluationExample"})}),"[]"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example evaluations"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L423",children:"packages/core/src/types.ts:423"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"handler",children:"handler"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"handler"}),": ",(0,a.jsx)(n.a,{href:"/eliza/api/type-aliases/Handler",children:(0,a.jsx)(n.code,{children:"Handler"})})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Handler function"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L426",children:"packages/core/src/types.ts:426"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"name"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Evaluator name"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L429",children:"packages/core/src/types.ts:429"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"validate",children:"validate"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"validate"}),": ",(0,a.jsx)(n.a,{href:"/eliza/api/type-aliases/Validator",children:(0,a.jsx)(n.code,{children:"Validator"})})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Validation function"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L432",children:"packages/core/src/types.ts:432"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(96540);const a={},l=s.createContext(a);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61079],{77802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={title:"Signing",sidebar_label:"Signing"},o=void 0,d={unversionedId:"specs/didcomm/protocols/signing",id:"specs/didcomm/protocols/signing",title:"Signing",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/external/identity.rs/documentation/docs/specs/didcomm/protocols/signing.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/signing",permalink:"/identity.rs/specs/didcomm/protocols/signing",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/specs/didcomm/protocols/signing.md",tags:[],version:"current",frontMatter:{title:"Signing",sidebar_label:"Signing"},sidebar:"docs",previous:{title:"Issuance",permalink:"/identity.rs/specs/didcomm/protocols/issuance"},next:{title:"Revocation",permalink:"/identity.rs/specs/didcomm/protocols/revocation"}},p=[{value:"Overview",id:"overview",children:[{value:"Relationships",id:"relationships",children:[],level:3},{value:"Example Use-Cases",id:"example-use-cases",children:[],level:3},{value:"Roles",id:"roles",children:[],level:3},{value:"Interaction",id:"interaction",children:[],level:3}],level:2},{value:"Messages",id:"messages",children:[{value:"1. signing-request",id:"signing-request",children:[{value:"Structure",id:"structure",children:[],level:4},{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"2. signing-response",id:"signing-response",children:[{value:"Structure",id:"structure-1",children:[],level:4},{value:"Examples",id:"examples-1",children:[],level:4}],level:3},{value:"3. signing-acknowledgement",id:"signing-acknowledgement",children:[{value:"Structure",id:"structure-2",children:[],level:4},{value:"Examples",id:"examples-2",children:[],level:4}],level:3},{value:"Problem Reports",id:"problem-reports",children:[],level:3}],level:2},{value:"Unresolved Questions",id:"unresolved-questions",children:[],level:2},{value:"Considerations",id:"considerations",children:[],level:2},{value:"Related Work",id:"related-work",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],c={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,i.kt)("li",{parentName:"ul"},"Status: ",(0,i.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Allows a trusted-party to request the signing of an unsigned verifiable credential by an issuer."),(0,i.kt)("h3",{id:"relationships"},"Relationships"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./issuance"},"Issuance"),": an ",(0,i.kt)("a",{parentName:"li",href:"./issuance#roles"},"issuer")," may take on the role of ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," to request a different ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"issuer")," to sign a new credential.")),(0,i.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A separate department requests a signature by the legal department of a company."),(0,i.kt)("li",{parentName:"ul"},"A subsidiary requests the parent company to sign a credential."),(0,i.kt)("li",{parentName:"ul"},"An IOT device generates an unsigned credential and requests a secure server to sign it.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trusted-Party: trusted by the issuer to generate unsigned credentials asserting claims about one or more subjects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-issuers"},"Issuer"),": has the capability to cryptographically sign credentials.")),(0,i.kt)("h3",{id:"interaction"},"Interaction"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SigningDiagram",src:n(44061).Z,width:"512",height:"582"})),(0,i.kt)("sub",null,"For guidance on diagrams see the ",(0,i.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"signing-request"},"1. signing-request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-request")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,i.kt)("p",null,"Request by a ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," for an ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," to sign a credential."),(0,i.kt)("p",null,"To authenticate the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),", this SHOULD be sent using ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," established in a preceding ",(0,i.kt)("a",{parentName:"p",href:"./authentication"},"authentication")," protocol. For non-repudiation or auditing, the ",(0,i.kt)("a",{parentName:"p",href:"#role"},"issuer")," MAY enforce that the ",(0,i.kt)("a",{parentName:"p",href:"#signing-request"},"signing-request")," be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),"."),(0,i.kt)("h4",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unsignedCredential": Credential // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},(0,i.kt)("inlineCode",{parentName:"a"},"unsignedCredential"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unsigned ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"verifiable credential")," requested to be signed by the ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"issuer"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The initial credential MUST NOT have a ",(0,i.kt)("inlineCode",{parentName:"p"},"proof")," section."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Request to sign a bachelors degree.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unsignedCredential": {\n    "@context": [\n      "https://www.w3.org/2018/credentials/v1",\n      "https://www.w3.org/2018/credentials/examples/v1"\n    ],\n    "id": "6c1a1477-e452-4da7-b2db-65ad0b369d1a",\n    "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n    "issuer": "did:example:76e12ec712ebc6f1c221ebfeb1f",\n    "issuanceDate": "2021-05-03T19:73:24Z",\n    "credentialSubject": {\n      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n      "degree": {\n        "type": "BachelorDegree",\n        "name": "Bachelor of Science and Arts"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"signing-response"},"2. signing-response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-response")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"issuer"))),(0,i.kt)("p",null,"Response from the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," returning the signed credential back to the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),"."),(0,i.kt)("h4",{id:"structure-1"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "signedCredential": Credential // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},(0,i.kt)("inlineCode",{parentName:"a"},"signedCredential"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Signed ",(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"verifiable credential")," matching the ",(0,i.kt)("a",{parentName:"td",href:"#signing-request"},"signing-request"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," MUST validate the signature in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proof")," section and issue a problem-report if invalid. The ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," SHOULD also verify that the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"signedCredential")," sent back by the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," are complete and unaltered from the ",(0,i.kt)("a",{parentName:"p",href:"#signing-request"},"signing-request"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," may request in turn that the credential be signed by a different issuer unknown to the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),", by repeating this protocol or through alternative means. In such a case, it is up to the initial ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," whether or not to accept the final signature if not signed by the initial ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," they requested."),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Respond with a signed a bachelors degree.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "signedCredential": {\n    "@context": [\n      "https://www.w3.org/2018/credentials/v1",\n      "https://www.w3.org/2018/credentials/examples/v1"\n    ],\n    "id": "6c1a1477-e452-4da7-b2db-65ad0b369d1a",\n    "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n    "issuer": "did:example:76e12ec712ebc6f1c221ebfeb1f",\n    "issuanceDate": "2021-05-03T19:73:24Z",\n    "credentialSubject": {\n      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n      "degree": {\n        "type": "BachelorDegree",\n        "name": "Bachelor of Science and Arts"\n      }\n    },\n    "proof": {...}\n  }\n}\n')),(0,i.kt)("h3",{id:"signing-acknowledgement"},"3. signing-acknowledgement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-acknowledgement")),(0,i.kt)("li",{parentName:"ul"},"Role: ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,i.kt)("p",null,"Acknowledgement by the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," that the credential was received and accepted. The ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," MAY revoke the credential if no acknowledgement is received. For auditing or non-repudiation the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"issuer")," MAY require that the ",(0,i.kt)("a",{parentName:"p",href:"#signing-acknowledgement"},"signing-acknowledgement")," be a ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),"."),(0,i.kt)("h4",{id:"structure-2"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": bool // REQUIRED\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accepted")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Indicates that the ",(0,i.kt)("inlineCode",{parentName:"td"},"signedCredential")," was received and validated by the ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"trusted-party"),".",(0,i.kt)("sup",{parentName:"td",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"accepted")," MUST be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Invalid signatures or credentials SHOULD result in problem-reports by the ",(0,i.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),"."),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accept the credential.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": true\n}\n')),(0,i.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,i.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,i.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,i.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.signing.reject-request")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#signing-request"},"signing-request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"issuer")," rejects a signing request for any reason, e.g. malformed credential, unrecognised credential type, or unwillingness to sign the specific credential for the ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"trusted-party"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.signing.reject-response")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#signing-response"},"signing-response")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("a",{parentName:"td",href:"#roles"},"trusted-party")," rejects a signing response for any reason, e.g. mismatch between request and response credentials.")))),(0,i.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using a signed DIDComm message for auditing requires retaining the entire message including the credential itself. While this may be desired or required for some purposes, it could complicate or violate GDPR laws. Should an explicit signature of the credential hash be used instead, similar to the ",(0,i.kt)("a",{parentName:"li",href:"./issuance"},"issuance")," protocol?")),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"This section is non-normative."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security"),": implementors SHOULD transmit credentials over an encrypted channel to prevent leaking sensitive information on subjects. See ",(0,i.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender-authenticated encryption"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication"),": it is RECOMMENDED to use sender-authenticated encryption for continuous authentication of both parties in the DIDComm thread. Anonymous encryption and/or once-off authentication may be insufficient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorisation"),": the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"issuer")," should establish whether a trusted-party is allowed to request signing of a particular credential or at all."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validation"),": apart from verifying the proof on the signed credential returned in the ",(0,i.kt)("a",{parentName:"li",href:"#signing-response"},"signing-response"),", how the ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"issuer")," validates the contents of a well-formed credential from a ",(0,i.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," and chooses whether or not to sign it is out-of-scope.")),(0,i.kt)("h2",{id:"related-work"},"Related Work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/08653f21a489bf4717b54e4d7fd2d0bdfe6b4d1a/features/0327-crypto-service"},"https://github.com/hyperledger/aries-rfcs/tree/08653f21a489bf4717b54e4d7fd2d0bdfe6b4d1a/features/0327-crypto-service"))),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model"},"Verifiable Credentials Data Model 1.0"))))}u.isMDXComponent=!0},44061:function(e,t,n){t.Z=n.p+"assets/images/signing.drawio-71f1f2c838c1d67bd5886e26440163df.svg"},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
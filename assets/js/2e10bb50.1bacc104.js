"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22745],{49455:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),s=["components"],r={description:"A high-level overview of the protocol, following the natural life cycle of a message from the Tip Selection module to being considered valid permanently by all nodes.",image:"/img/protocol_specification/Protocol_overview_received_message.png",keywords:["message","node","honest node","rate of issuance","congestion control","mana","access","rate setter","consensus"]},l="Protocol High-level Overview",c={unversionedId:"protocol_specification/protocol",id:"protocol_specification/protocol",title:"Protocol High-level Overview",description:"A high-level overview of the protocol, following the natural life cycle of a message from the Tip Selection module to being considered valid permanently by all nodes.",source:"@site/external/goshimmer/documentation/docs/protocol_specification/protocol.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/protocol",permalink:"/goshimmer/protocol_specification/protocol",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/protocol_specification/protocol.md",tags:[],version:"current",frontMatter:{description:"A high-level overview of the protocol, following the natural life cycle of a message from the Tip Selection module to being considered valid permanently by all nodes.",image:"/img/protocol_specification/Protocol_overview_received_message.png",keywords:["message","node","honest node","rate of issuance","congestion control","mana","access","rate setter","consensus"]},sidebar:"docs",previous:{title:"Protocol specification",permalink:"/goshimmer/protocol_specification/overview"},next:{title:"Components of the Protocol",permalink:"/goshimmer/protocol_specification/components/overview"}},h=[],p={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"protocol-high-level-overview"},"Protocol High-level Overview"),(0,i.kt)("p",null,"To orientate the reader, we provide a high-level overview of the protocol, following the natural life cycle of a message. The first module used","\u2014","while the message is still being created","\u2014",", is the ",(0,i.kt)("strong",{parentName:"p"},"Tip Selection")," module.\nHere, the node must choose a certain number (from two to eight) of other messages to reference, meaning that the newly created message will be cryptographically attached to these referenced messages.\nAn honest node must always choose tips uniformly at random from a tip pool, i.e., from a set of still unreferenced messages that satisfy a certain set of conditions, as discussed on the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/tangle"},"Tangle")," component.\nIn the diagram below, the issuance process being described now is represented in the context of the complete protocol. "),(0,i.kt)("p",null,"Each node in the network has limited bandwidth, CPU, and memory. In order to avoid any node from being overloaded, the right to write in everybody else's Tangle is regulated by the ",(0,i.kt)("strong",{parentName:"p"},"Rate and Congestion Control Modules"),".\nThe first one dictates the maximum rate of issuance of messages by the introduction of a small amount of proof of work.\nHowever, if an attacker accelerates the message issuance","\u2014","effectively flooding the network","\u2014",", the difficulty of the proof of work for that node will increase exponentially. Eventually, the attacker will be incapable of issuing new messages. "),(0,i.kt)("p",null,"Later, the Congestion control module fairly allocates the network resources accordingly to a quantity called ",(0,i.kt)("strong",{parentName:"p"},"Access Mana"),", which acts as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sybil_attack"},"Sybil protection")," mechanism.\nWe can summarize Access Mana as a scarce resource, that makes an effective Sybil protection mechanism. Thus, each node has the right to issue messages at a rate proportional to their Access Mana.\nThis fair rate is not constant (since the utilization of the network may fluctuate), and to correctly set its own individual rate of issuance of messages, each node uses a mechanism called the ",(0,i.kt)("strong",{parentName:"p"},"Rate Setter"),", that makes the average issuance rate of the node converge to the fair rate guaranteed by Access Mana.\nNodes that do not use the rate Setter will be punished by either the Rate Control or the Congestion Control Module."),(0,i.kt)("p",null,"Between the Rate Setter and the actual gossip of the message, several steps will take place, but","\u2014","for the sake of clearness","\u2014","we ignore these steps for now and return to this subject later.\nThen, assuming that the message was properly created, it will be propagated to the rest of the network.\nSince we deal with a large number of nodes, the communication graph cannot be ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Complete_graph"},"complete"),".\nThus, the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_topology"},"network topology")," will be dictated by the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/autopeering"},(0,i.kt)("strong",{parentName:"a"},"Neighbor Selection"))," (aka Autopeering) module. "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(60231).Z},(0,i.kt)("img",{alt:"Protocol Overview Received Message",src:o(94733).Z,title:"Protocol Overview Received Message",width:"1143",height:"331"}))),(0,i.kt)("p",null,"We turn our attention now to another point of view: the one of the nodes receiving new messages, represented in the diagram above.\nAfter receiving a message, the node will perform several ",(0,i.kt)("strong",{parentName:"p"},"syntactical verifications"),", that will act as a filter to the messages. Additionally, the message has to be ",(0,i.kt)("strong",{parentName:"p"},"solidified"),", meaning that the node must know all the past cone of the message (i.e., the set of all messages directly or indirectly referenced by the message in question).\nAfter this step, the node places all the messages left into an inbox. At a fixed global rate (meaning that all nodes use the same rate), the node uses a ",(0,i.kt)("strong",{parentName:"p"},"scheduler")," to choose a message from the inbox.\nThis scheduler","\u2014","that, technically, is part of the aforementioned congestion control mechanism","\u2014","works as a gatekeeper, effectively regulating the use of the most scarce resources of the nodes.\nSince the scheduler works at a fixed rate, the network cannot be overwhelmed. The scheduler is designed to ensure","\u2014","even in the presence of attackers","\u2014","the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Consistency"),": all honest nodes will schedule the same messages"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fair access"),": the nodes' messages will be scheduled at a fair rate according to their Access Mana"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Bounded latency"),": the processing time of all messages will be bounded")),(0,i.kt)("p",null,"Only after passing the scheduler the messages can be written into the local Tangle. To do that, the nodes perform most of the ",(0,i.kt)("strong",{parentName:"p"},"semantic validation"),", such as the search for irreconcilable conflicts in the message's past cone or (in the case of value transfers) unlock condition checks.\nAt this point (if the message passes these checks), the message will be ",(0,i.kt)("strong",{parentName:"p"},"booked")," into the ",(0,i.kt)("strong",{parentName:"p"},"local Tangle")," of the node and be gossiped to the rest of the network.\nAdditionally, in the case of a value transfer, the ",(0,i.kt)("strong",{parentName:"p"},"ledger state")," and two vectors called Access Mana Vector and ",(0,i.kt)("strong",{parentName:"p"},"Consensus Mana")," Vector are updated accordingly.\nThe Consensus Mana is another Sybil protection mechanism which","\u2014","since it is applied to different modules than Access Mana","\u2014","has the need of a different calculation. "),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(37347).Z},(0,i.kt)("img",{alt:"Protocol Overview Booking",src:o(97736).Z,title:"Protocol Overview Booking",width:"1144",height:"332"}))),(0,i.kt)("p",null,"After having the message booked, the node is free to ",(0,i.kt)("strong",{parentName:"p"},"gossip")," it, but a crucial step of the protocol is still missing: the ",(0,i.kt)("strong",{parentName:"p"},"Opinion Setter")," and the voting protocol, that deal with the most subjective parts of the consensus mechanism (notice that, until now, the protocol has mostly dealt with objective checks).\nThe voting protocol used here is the FPC (or ",(0,i.kt)("strong",{parentName:"p"},"Fast Probabilistic Consensus"),"), which is a binary voting protocol that allows a large group of nodes to come to a consensus on the value of a single bit.\nThe FPC begins with each node having an initial opinion, set using the node's local time perception and ordering of the messages. The nodes must set opinions about two subjects: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"The legitimacy of the timestamp of the message"),": Whenever a node issues a message, it adds a timestamp to it, which should represent the local time of issuance (as seen by the issuer node). The other nodes will judge if this timestamp is reasonable, by checking if it is too far away from their own local clock."),(0,i.kt)("li",{parentName:"ol"},"In the case of a value transfer, ",(0,i.kt)("strong",{parentName:"li"},"whether it is a conflict"),": We use the ",(0,i.kt)("a",{parentName:"li",href:"/goshimmer/protocol_specification/components/consensus_mechanism#fcob"},(0,i.kt)("strong",{parentName:"a"},"FCoB Rule")),". Roughly, the node will have a positive opinion about a transaction A if and only if all its conflicts arrived later than a certain time interval after A's arrival. ")),(0,i.kt)("p",null,"In each round, nodes randomly choose other nodes to query about their opinions about one of the subjects above.\nThe querying node changes its own opinion if the number of responses with a different opinion than it is greater than a certain threshold.\nIn order to prevent liveness attacks, this threshold is determined by a random number issued by a committee of high Consensus Mana nodes via the ",(0,i.kt)("strong",{parentName:"p"},"dRNG")," application.\nWithout the random threshold, an attacker could lie about its responses in a way that could prevent the protocol from terminating. Finally, a node will finalize on a certain opinion after holding it for a certain number of rounds. "),(0,i.kt)("p",null,"When selecting which other nodes to query, a node must weight the list of all nodes by Consensus Mana.\nThus, high Consensus Mana nodes are queried more often than low Consensus Mana nodes. This makes it difficult for an attacker to manipulate the outcome of the voting.\nUnless the attacker controls more than 1/3 of the Consensus Mana in the system, with high probability, we know that FPC has the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Termination"),": every honest node will finalize on some opinion before a maximum round number."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Agreement"),": all honest nodes will finalize on the same opinion."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Integrity"),": if a super majority of nodes","\u2014","e.g. more than 90% weighted by Consensus Mana","\u2014",", have the same initial opinion, then FPC will terminate with that value.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(81315).Z},(0,i.kt)("img",{alt:"Protocol Overview Consensus",src:o(93379).Z,title:"Protocol Overview Consensus",width:"1143",height:"331"}))),(0,i.kt)("p",null,"Analogously to Bitcoin's ",(0,i.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Confirmation"},"six blocks rule"),", our protocol has certain measures of the probability of a certain message being considered valid permanently by all nodes.\nThis is achieved by the use of the ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},(0,i.kt)("strong",{parentName:"a"},"Approval Weight")),".\nThe Approval weight represents the ",(0,i.kt)("em",{parentName:"p"},"weight")," of branches (and messages).\nDifferent to the classical Nakamoto consensus, instead of selecting a leader based on a puzzle (PoW) or stake (PoS), it allows every node to express its opinion by simply issuing any message and attaching it in a part of the Tangle it ",(0,i.kt)("em",{parentName:"p"},"likes")," based on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Like switch"),". Through the like switch, a message can even reference messages of branches it doesn't like (thereby reduce orphanage), by explicitly expressing which ones it likes instead.\nThis process is known as On-Tangle-Voting."))}m.isMDXComponent=!0},37347:function(e,t,o){t.Z=o.p+"assets/files/Protocol_overview_booking-07d70687eff08788b7b2b6522560524e.png"},81315:function(e,t,o){t.Z=o.p+"assets/files/Protocol_overview_consensus-b2ea6dc784ae417e4eaa7f3728a92c66.png"},60231:function(e,t,o){t.Z=o.p+"assets/files/Protocol_overview_received_message-224990fe56cd67cadd3ee3057139a911.png"},97736:function(e,t,o){t.Z=o.p+"assets/images/Protocol_overview_booking-07d70687eff08788b7b2b6522560524e.png"},93379:function(e,t,o){t.Z=o.p+"assets/images/Protocol_overview_consensus-b2ea6dc784ae417e4eaa7f3728a92c66.png"},94733:function(e,t,o){t.Z=o.p+"assets/images/Protocol_overview_received_message-224990fe56cd67cadd3ee3057139a911.png"},3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(f,s(s({ref:t},h),{},{components:o})):n.createElement(f,s({ref:t},h))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[68526],{7633:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var i=a(22122),n=a(19756),s=(a(67294),a(3905)),o=["components"],r={description:"This section provides a high-level description of the interaction between components of the IOTA 2.0 protocol. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/research-specifications/layers-overview.png",keywords:["fast probabilistic consensus","ledger state","tip manager","tip selection","timestamp opinion"]},l="2.4 Data flow",c={unversionedId:"2.4DataFlow",id:"2.4DataFlow",isDocsHomePage:!1,title:"2.4 Data flow",description:"This section provides a high-level description of the interaction between components of the IOTA 2.0 protocol. A P2P overlay network, an immutable data structure, and a consensus mechanism.",source:"@site/external/IOTA-2.0-Research-Specifications/docs/2.4DataFlow.md",sourceDirName:".",slug:"/2.4DataFlow",permalink:"/IOTA-2.0-Research-Specifications/2.4DataFlow",tags:[],version:"current",frontMatter:{description:"This section provides a high-level description of the interaction between components of the IOTA 2.0 protocol. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/research-specifications/layers-overview.png",keywords:["fast probabilistic consensus","ledger state","tip manager","tip selection","timestamp opinion"]},sidebar:"tutorialSidebar",previous:{title:"2.3 Standard Payloads Layout",permalink:"/IOTA-2.0-Research-Specifications/2.3StandardPayloadsLayout"},next:{title:"3.3 Peer Discovery",permalink:"/IOTA-2.0-Research-Specifications/3.3PeerDiscovery"}},h=[{value:"2.4.1 Network Layer",id:"241-network-layer",children:[]},{value:"2.4.2 Communication Layer",id:"242-communication-layer",children:[]},{value:"2.4.3 (Decentralized) Application Layer",id:"243-decentralized-application-layer",children:[]},{value:"2.4.4 Data Flow - Overview",id:"244-data-flow---overview",children:[{value:"2.4.4.1 Message Factory",id:"2441-message-factory",children:[]},{value:"2.4.4.2 Parser",id:"2442-parser",children:[]},{value:"2.4.4.3 Storage",id:"2443-storage",children:[]},{value:"2.4.4.4 Solidifier",id:"2444-solidifier",children:[]},{value:"2.4.4.5 Scheduler",id:"2445-scheduler",children:[]},{value:"2.4.4.6 Booker",id:"2446-booker",children:[]},{value:"2.4.4.7 Opinion Former",id:"2447-opinion-former",children:[]},{value:"2.4.4.8 Tip Manager",id:"2448-tip-manager",children:[]}]}],p={toc:h};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"24-data-flow"},"2.4 Data flow"),(0,s.kt)("p",null,"This section provides a high-level description of the interaction between components of the IOTA 2.0 protocol. The protocol can be divided into three main elements: a P2P overlay network, an immutable data structure, and a consensus mechanism. In the IOTA 2.0 protocol, these three elements are abstracted into layers, where\u2014similarly to other architectures\u2014upper layers build on the functionality provided by the layers below them. The definition of the different layers is merely about the convenience of creating a clear separation of concerns. All modules and their interactions will be described later in this document."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Different layers of the protocol",src:a(44201).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.1:")," Different layers of the protocol."),(0,s.kt)("p",null,"The data flow specification depends on the following specifications:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./2.2MessageLayout"},"2.2 - Message Layout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./2.3StandardPayloadsLayout"},"2.3 - Standard Payloads Layout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./3.3PeerDiscovery"},"3.3 - Peer Discovery")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./3.4NeighborSelection"},"3.4 - Neighbor Selection")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.1TheTangle"},"4.1 - The Tangle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"4.2 - Timestamps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.3TipSelectionAlgorithm"},"4.3 - Tip Selection Algorithm")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.4Solidification"},"4.4 - Solidification")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.5RateControl"},"4.5 - Rate Control")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./4.6CongestionControl"},"4.6 - Congestion Control")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"5.2 - Ledger State")," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./5.3Mana"},"5.3 - Mana")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./6.3FastProbabilisticConsensus"},"6.3 - Fast Probabilistic Consensus")," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./6.1ObjectsofConsensus"},"6.1 - Object of Consensus")," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./6.5dRNG"},"6.5 - dRNG"))),(0,s.kt)("h2",{id:"241-network-layer"},"2.4.1 Network Layer"),(0,s.kt)("p",null,"The network will be maintained by the network layer modules, which can be characterized as a pure P2P overlay network, meaning that it is a system that runs on top of another network (e.g., the internet), and where all nodes have the same roles and perform the same actions (in contrast to client-server systems). IOTA 2.0's Network Layer consists of two basic modules: the ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/3.3PeerDiscovery"},"peer discovery")," module (which provides a list of nodes actively using the network), and the ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/3.4NeighborSelection"},"neighbor selection")," module (also known as autopeering), which actually select peers. Finally, the gossip is managed by the network layer as well."),(0,s.kt)("h2",{id:"242-communication-layer"},"2.4.2 Communication Layer"),(0,s.kt)("p",null,"The communication layer concerns the information propagated through the network layer, which is contained in objects called messages. This layer forms a DAG with messages as vertices called ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/4.1TheTangle"},"The Tangle"),": a replicated, shared and distributed data structure that emerges through a combination of deterministic rules, cooperation, and (either direct or virtual) voting\u2014as FPC and approval weight based finality. Since nodes have finite capabilities, the number of messages that the network can process is limited. Thus, the network might become overloaded, either simply because of honest heavy usage or because of malicious (spam) attacks. To protect the network from halting or even from getting inconsistent, the ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/4.5RateControl"},"rate control")," and ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/4.6CongestionControl"},"congestion control")," modules control when and how many messages can be gossiped. "),(0,s.kt)("h2",{id:"243-decentralized-application-layer"},"2.4.3 (Decentralized) Application Layer"),(0,s.kt)("p",null,"On top of the communication layer lives the application layer. Anybody can develop applications that run on this layer, and nodes can choose which applications to run. Of course, these applications can also be dependent on each other. There are several core applications that must be run by all nodes, as the value transfer applications, which maintains the ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/5.2LedgerState"},"ledger state")," and a quantity called ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/5.3Mana"},"Mana"),", that serves as a scarce resource to our Sybil protection mechanism. Additionally, all nodes must run what we call the consensus applications, which regulate timestamps in the messages and resolve conflicts. The ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"Fast Probabilistic Consensus")," (Fast Probabilistic Consensus) application provides a binary voting protocol that produces consensus on a bit. ",(0,s.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.1ObjectsOfConsensus"},"Section 6.1 - Object of Consensus")," outlines how this binary voting protocol is used to vote on actual objects, particularly transactions and timestamps. In particular, FPC determines which transactions are to be written to the ledger, and which ones should be left to be orphaned. The FPC application uses another application called ","[dRNG]","(./6.6 dRNG.md) (distributed Random Number Generator). Lastly, the Node Perception Reorganization application enables nodes to reorganize their perception of the Tangle if needed."),(0,s.kt)("h2",{id:"244-data-flow---overview"},"2.4.4 Data Flow - Overview"),(0,s.kt)("p",null,"The diagram below represents the interaction between the different modules in the protocol. Each blue box represents a component, which have events (in yellow boxes) that belong to them. Those events will trigger methods (the green boxes), that can also trigger other methods. This triggering is represented by the arrows in the diagram. Finally, the purple boxes represent events that do not belong to the component that triggered them."),(0,s.kt)("p",null,"As an example, take the Parser component. The function ",(0,s.kt)("inlineCode",{parentName:"p"},"ProcessGossipMessage")," will trigger the method ",(0,s.kt)("inlineCode",{parentName:"p"},"Parse"),", which is the only entry to the component. There are three possible outcomes to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Parser"),": triggering a ",(0,s.kt)("inlineCode",{parentName:"p"},"ParsingFailed")," event, a ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageRejected")," event, or a ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageParsed")," event. In the last case, the event will trigger the ",(0,s.kt)("inlineCode",{parentName:"p"},"StoreMessage")," method (which is the entry to the Storage component), whereas the first two events do not trigger any other component."),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(36872).Z},(0,s.kt)("img",{alt:"Data flow overview",src:a(75964).Z}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.2:")," Data flow overview."),(0,s.kt)("p",null,"We present what we call the data flow, i.e., the life cycle of a message, from message reception (meaning that we focus here on the point of view of a node receiving a message issued by another node) up until acceptance in the Tangle. The message creation complete process is described in Section 4.8 - Message Creation. Notice that any message, either created locally by the node or received from a neighbor needs to pass through most of the data flow. Specifically, all messages pass from the Storage component to the Tip Manager."),(0,s.kt)("h3",{id:"2441-message-factory"},"2.4.4.1 Message Factory"),(0,s.kt)("p",null,"The IssuePayload function creates a valid payload which is provided to the CreateMessage method, along with a set of parents chosen with the ",(0,s.kt)("a",{parentName:"p",href:"./4.3TipSelectionAlgorithm"},"Section 4.3 - Tip Selection Algorithm"),". Then, the Message Factory component is responsible to find a nonce compatible with the PoW requirements defined by the ",(0,s.kt)("a",{parentName:"p",href:"./4.5RateControl"},"rate control")," module. Finally, the message is signed (see ",(0,s.kt)("a",{parentName:"p",href:"./2.2MessageLayout"},"Section 2.2 - Message Layout"),"). Notice that the message generation should follow the rates imposed by the rate setter, as defined in ",(0,s.kt)("a",{parentName:"p",href:"./4.6CongestionControl"},"Section 4.6 - Congestion Control")),(0,s.kt)("h3",{id:"2442-parser"},"2.4.4.2 Parser"),(0,s.kt)("p",null,"The first step after the arrival of the message to the message inbox is the parsing, which consists of the five following different filtering processes (meaning that the messages that don't pass these steps will not be stored):"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Recently Seen Bytes: it compares the incoming messages with a pool of recently seen bytes to filter duplicates. If the message does not pass this check, the message is dropped. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Parsing and Syntactical Validation: it checks if the message and the payload (when present) are syntactically valid, as defined in ",(0,s.kt)("a",{parentName:"li",href:"./2.2MessageLayout"},"Section 2.2 - Message Layout")," and ",(0,s.kt)("a",{parentName:"li",href:"./2.3StandardPayloadsLayout"},"Section 2.3 - Payloads Layout"),". If the parsing fails, a ",(0,s.kt)("inlineCode",{parentName:"li"},"ParsingFailed")," event is triggered; if the Syntactical Validation fails, a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageRejected")," event is triggered. If it passes both checks, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Timestamp Difference Check: it checks if the timestamps of the payload and the message are consistent with each other, i.e., if ",(0,s.kt)("inlineCode",{parentName:"li"},"transaction.timestamp+TW >= message.timestamp >= transaction.timestamp"),", where TW is the maximal difference between message timestamp and transaction timestamp, as defined in ",(0,s.kt)("a",{parentName:"li",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),". Evidently, this step is only executed when the message contains a payload. If the message does not pass this check, a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageRejected")," event is triggered. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Signature check: it checks if the message signature is valid (see ",(0,s.kt)("a",{parentName:"li",href:"./2.2MessageLayout"},"Section 2.2 - Message Layout"),"). If the message does not pass this check, a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageRejected")," event is triggered. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"aPoW check: it checks if the PoW requirements are met, as defined in ",(0,s.kt)("a",{parentName:"li",href:"./4.5RateControl"},"Section 4.5 - Rate Control"),". If the message does not pass this check, a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageRejected")," event is triggered. If it passes the check, a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageParsed")," event is issued, which will trigger the Storage module. ")),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(74031).Z},(0,s.kt)("img",{alt:"The parser",src:a(25875).Z}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.3:")," The parser."),(0,s.kt)("h3",{id:"2443-storage"},"2.4.4.3 Storage"),(0,s.kt)("p",null,"Only the messages that pass the Parser will be stored, along with its metadata ",(0,s.kt)("inlineCode",{parentName:"p"},"receivedTime"),". As defined in ",(0,s.kt)("a",{parentName:"p",href:"./2.2MessageLayout"},"Section 2.2 - Message Layout"),", the message has additional metadata fields, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"solidificationTime")," and other Boolean flags, that will be set in future points of the data flow. The storage also performs a cleaning process, which can be triggered periodically or everytime a message is marked as invalid, to delete invalid messages."),(0,s.kt)("h3",{id:"2444-solidifier"},"2.4.4.4 Solidifier"),(0,s.kt)("p",null,"The solidification is the process of requesting missing messages. In this step, the node checks if all the past cone of the message is known; in the case that the node realizes that a message in the past cone is missing, it will send a request to its neighbors asking for that missing message. This process is recursively repeated until all of a message's past cone up to the genesis (or snapshot) becomes known to the node (for more information, see ",(0,s.kt)("a",{parentName:"p",href:"./4.4Solidification"},"Section 4.4 - Solidification"),").\nThis way, the protocol enables any node to retrieve the entire message history, even for nodes that have just joined the network. When the solidification process successfully ends, the flag ",(0,s.kt)("inlineCode",{parentName:"p"},"solid")," in its metadata is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"TRUE"),". In the case that the process does not terminate successfully, the flag ",(0,s.kt)("inlineCode",{parentName:"p"},"invalid")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"TRUE"),". If, while solidifying, the node realizes that one of the parents of the message is ",(0,s.kt)("inlineCode",{parentName:"p"},"invalid"),", the message itself is also marked as ",(0,s.kt)("inlineCode",{parentName:"p"},"invalid"),"."),(0,s.kt)("p",null,'Also in the solidifier, the "Parents age check" is performed. It consists in checking if the timestamp of the message and the timestamps of each of its parents satisfy\n',(0,s.kt)("inlineCode",{parentName:"p"},"parent.timestamp+DELTA >= message.timestamp >= parent.timestamp")," (see ",(0,s.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),"). As in the solidification case, if the above condition is not met, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"p"},"invalid"),"."),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:a(95857).Z},(0,s.kt)("img",{alt:"The solidifier",src:a(98002).Z}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.4:")," The solidifier."),(0,s.kt)("h3",{id:"2445-scheduler"},"2.4.4.5 Scheduler"),(0,s.kt)("p",null,"One may think of the scheduler as a gatekeeper to the more expensive computations. Once the steps above are successful, the message is enqueued into the outbox. The outbox is split into several queues, each one corresponding to a different node issuing messages. Once the message is enqueued into the right place, the queue is sorted by increasing message timestamp. The dequeuing process is done using a modified version of the deficit round-robin (DRR) algorithm, as described in ",(0,s.kt)("a",{parentName:"p",href:"./4.6CongestionControl"},"Section 4.6 - Congestion Control"),". A maximum (fixed) global rate ",(0,s.kt)("inlineCode",{parentName:"p"},"SCHEDULING_RATE"),", at which messages will be scheduled, is set."),(0,s.kt)("h3",{id:"2446-booker"},"2.4.4.6 Booker"),(0,s.kt)("p",null,"After scheduling, the message goes to the booker. This step is different between messages that contain a transaction payload and messages that do not contain it. "),(0,s.kt)("p",null,"In the case of a non-value message, booking into the Tangle occurs after the conflicting parents branches check, i.e., after checking if the parents' branches contain sets of (two or more) transactions that belong to the same conflict set (see ",(0,s.kt)("a",{parentName:"p",href:"./5.2LedgerState"},"Section 5.2 - Ledger State"),"). In the case of this check not being successful, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"p"},"invalid")," and not booked."),(0,s.kt)("p",null,"In the case of a value message, initially, the following check is done:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"UTXO check: it checks if the inputs of the transaction were already booked. If the message does not pass this check, the message is not booked and a ",(0,s.kt)("inlineCode",{parentName:"li"},"TransactionNotBooked")," event is triggered. If it passes the check, it goes to the next block of steps. ")),(0,s.kt)("p",null,"Then, the following objective checks are done:"),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Balances check: it checks if the sum of the values of the generated outputs equals the sum of the values of the consumed inputs. If the message does not pass this check, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Unlock conditions: checks if the unlock conditions (see ",(0,s.kt)("a",{parentName:"li",href:"./2.3StandardPayloadsLayout.md"},"Section 2.3 - Standard Payloads Layout"),") are valid. If the message does not pass this check, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Inputs' branches validity check: it checks if all the consumed inputs belong to a valid branch. If the message does not pass this check, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step. ")),(0,s.kt)("p",null,"After the objective checks, the following subjective checks are done:"),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},'Inputs\' branches rejection check: it checks if all the consumed inputs belong to a non-rejected branch. Notice that this is not an objective check, so the node is susceptible (even if with a small probability) to have its opinion about rejected branches changed by a reorganization. For that reason, if the message does not pass this check, the message is booked into the Tangle and ledger state (even though the balances are not altered by this message, since it will be booked to a rejected branch). This is what we call "lazy booking", which is done to avoid huge re-calculations in case of a reorganization of the ledger. If it passes the check, it goes to the next step. '),(0,s.kt)("li",{parentName:"ol"},"Double spend check: it checks if any of the inputs is conflicting with a transaction that was already confirmed. As in the last step, this check is not objective and, thus, if the message does not pass this check, it is lazy booked into the Tangle and ledger state, into an invalid branch. If it passes the check, it goes to the next step. ")),(0,s.kt)("p",null,"At this point, the missing steps are the most computationally expensive:"),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Past cone check: it checks if the inputs of the transaction were generated by transactions in the past cone of the message. As this check is objective, if the message does not pass this check, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Inputs' conflicting branches check: it checks if the branches of the inputs are conflicting. As in the last step, if the message does not pass this check, the message is marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step. "),(0,s.kt)("li",{parentName:"ol"},"Conflict check: it checks if the inputs are conflicting with an unconfirmed transaction. In this step, the branch to which the message belongs is computed. In both cases (passing the check or not), the message is booked into the ledger state and the Tangle, but its branch ID will be different depending on the outcome of the check (see ",(0,s.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"Section 5.2 - Ledger State"),").")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/img/reasearch-specifications/booker.png"},(0,s.kt)("img",{alt:"The booker",src:a(17359).Z}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.5:")," The booker. "),(0,s.kt)("p",null,"Finally, after a message is booked, it can be gossiped."),(0,s.kt)("h3",{id:"2447-opinion-former"},"2.4.4.7 Opinion Former"),(0,s.kt)("p",null,"The opinion former consists of two independent processes, that can be done in parallel: the payload opinion setting and the message timestamp opinion setting. The message timestamp opinion setting is described in ",(0,s.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),", and it's done after an initial timestamp check (and possible FPC voting, as described in ",(0,s.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus"),"). "),(0,s.kt)("p",null,"In parallel to the message timestamp opinion setting, a payload evaluation is also done. If the message does not contain a transaction payload, the payload opinion is automatically set to ",(0,s.kt)("inlineCode",{parentName:"p"},"liked"),". Otherwise, it has to pass the FCoB rule (and possibly, an FPC voting) in order to be ",(0,s.kt)("inlineCode",{parentName:"p"},"liked"),", as described in ",(0,s.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps")," and ",(0,s.kt)("a",{parentName:"p",href:"./6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus"),". "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/img/reasearch-specifications/opinion-former.png"},(0,s.kt)("img",{alt:"The opinion former",src:a(54433).Z}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Image 2.4.6:")," The opinion former. "),(0,s.kt)("h3",{id:"2448-tip-manager"},"2.4.4.8 Tip Manager"),(0,s.kt)("p",null,"The first check done in the tip manager is the eligibility check, which is defined in ",(0,s.kt)("a",{parentName:"p",href:"./4.2Timestamps"},"Section 4.2 - Timestamps"),", after passing it, a message is said to be ",(0,s.kt)("inlineCode",{parentName:"p"},"eligible")," for tip selection (otherwise, it's ",(0,s.kt)("inlineCode",{parentName:"p"},"not eligible"),").  If a message is eligible for tip selection and its payload is ",(0,s.kt)("inlineCode",{parentName:"p"},"liked"),", along with all its weak past cone, the message is added to the strong tip pool and its parents are removed from the strong tip pool (for more information about the different tip pools, see ",(0,s.kt)("a",{parentName:"p",href:"./4.3TipSelectionAlgorithm"},"Section 4.3 - Tip Selection Algorithm"),"). If a message is eligible for tip selection, its payload is ",(0,s.kt)("inlineCode",{parentName:"p"},"liked")," and the message is not in the strong pool, it is added to the weak tip pool and its parents are removed from any the pool that they are included."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/img/reasearch-specifications/tip-manager.png"},(0,s.kt)("img",{alt:"The tip manager",src:a(74690).Z})),"\n",(0,s.kt)("strong",{parentName:"p"},"Image 2.4.7:")," The tip manager."))}d.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return a?i.createElement(f,o(o({ref:t},h),{},{components:a})):i.createElement(f,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36872:function(e,t,a){t.Z=a.p+"assets/files/data-flow-overview-38f6359b7682d3a5079cce68130e3964.png"},74031:function(e,t,a){t.Z=a.p+"assets/files/message-parse-e5dc99c47da8b1b0cb7d30162313ecca.png"},95857:function(e,t,a){t.Z=a.p+"assets/files/solidifier-9dba8320157121256e1d81845dd0412d.png"},17359:function(e,t,a){t.Z=a.p+"assets/images/booker-b4b40d422eb236f9bd7bc84724245725.png"},75964:function(e,t,a){t.Z=a.p+"assets/images/data-flow-overview-38f6359b7682d3a5079cce68130e3964.png"},44201:function(e,t,a){t.Z=a.p+"assets/images/layers-overview-dc1445026989bc7461d30243f153a443.png"},25875:function(e,t,a){t.Z=a.p+"assets/images/message-parse-e5dc99c47da8b1b0cb7d30162313ecca.png"},54433:function(e,t,a){t.Z=a.p+"assets/images/opinion-former-30c9a951fe655ca9c740967ede3afc83.png"},98002:function(e,t,a){t.Z=a.p+"assets/images/solidifier-9dba8320157121256e1d81845dd0412d.png"},74690:function(e,t,a){t.Z=a.p+"assets/images/tip-manager-862fc2badf108f2d3c03bcaa33ab62c5.png"}}]);
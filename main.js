"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkList = new LinkedList_1.LinkedList();
linkList.addFirstNode(5);
linkList.addFirstNode(6);
linkList.addFirstNode(7);
linkList.addFirstNode(8);
linkList.addLastNode("huy");
console.log(linkList);
// console.log(linkList.deleteFirstNode())
// console.log(linkList)
// console.log(linkList.deleteLastNode());
linkList.deleteLastNode();
console.log(linkList);

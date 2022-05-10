"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    LinkedList.prototype.addFirstNode = function (data) {
        var node = new Node_1.Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.count++;
    };
    LinkedList.prototype.addLastNode = function (data) {
        var node = new Node_1.Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++;
    };
    LinkedList.prototype.deleteFirstNode = function () {
        var nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        this.count--;
    };
    LinkedList.prototype.deleteLastNode = function () {
        var node = this.head;
        var preNode = null;
        while (node.next) {
            preNode = node;
            node = node.next;
        }
        preNode.next = null;
        this.tail = preNode;
        this.count--;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

import {Node} from "./Node";
export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addFirstNode(data: T): void {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.count++;
    }

    addLastNode(data: T): void {
        let node = new Node(data);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.count++

    }

    deleteFirstNode(): void {
        let nextNode = this.head.next;
        this.head.next = null;
        this.head = nextNode;
        this.count--;
    }

    deleteLastNode(): void {
        let node = this.head
        let preNode = null;

        while (node.next) {
            preNode = node;
            node = node.next;
        }
        preNode.next = null;
        this.tail = preNode;
        this.count--;

    }
}
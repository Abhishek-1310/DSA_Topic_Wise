class Node {
    constructor(url) {
        this.url = url;
        this.prev = null;
        this.next = null;
    }
}
var BrowserHistory = function (homepage) {
    this.curr = new Node(homepage);

};

BrowserHistory.prototype.visit = function (url) {
    let newNode = new Node(url);
    this.curr.next = newNode;
    newNode.prev = this.curr
    this.curr = newNode;

};

BrowserHistory.prototype.back = function (steps) {
    while (steps > 0 && this.curr.prev) {
        this.curr = this.curr.prev
        steps--;
    }
    return this.curr.url;
};

BrowserHistory.prototype.forward = function (steps) {
    while (steps > 0 && this.curr.next) {
        this.curr = this.curr.next;
        steps--;
    }
    return this.curr.url;
};
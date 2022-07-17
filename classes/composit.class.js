export class Component {
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(component) { }
    remove(component) { }
    isComposite() {
        return false;
    }
}
export class Element extends Component {
    constructor(title, amount, price) {
        super();
        this.title = 'Element title';
        this.price = price;
        this.amount = amount;
        this.title = title;
    }
    getTotalSumm() {
        return this.price * this.amount;
    }
    getPackegeInfo(current) {
        current[this.title] = current[this.title] ? current[this.title] + this.amount : this.amount;
        return current;
    }
}
export class Composite extends Component {
    constructor(title) {
        super();
        this.title = '';
        this.children = [];
        this.title = title;
    }
    add(components) {
        this.children = [...this.children, ...components];
        components.forEach((el) => el.setParent(this));
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    getTotalSumm() {
        return this.children.reduce((summ, child) => {
            return summ + child.getTotalSumm();
        }, 0);
    }
    getPackegeInfo(current = {}) {
        return this.children.reduce((res, child) => {
            return child.getPackegeInfo(res);
        }, current);
    }
}

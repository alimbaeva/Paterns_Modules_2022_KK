function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        if (type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === "standard") {
            member = new StatdatdMembership(name);
        } else if (type === "vip") {
            member = new VipMembership(name);
        }

        member.type = type;
        member.define = function () {
            console.log(`${this.name} - (${this.type} - ${this.cost})`);
        };

        return member;
    };
}

const SimpleMembership = function (name) {
    this.name = name;
    this.cost = 50;
};
const StatdatdMembership = function (name) {
    this.name = name;
    this.cost = 500;
};
const VipMembership = function (name) {
    this.name = name;
    this.cost = 1000;
};

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("jone", "simple"));
members.push(factory.createMember("tom", "standard"));
members.push(factory.createMember("asker", "vip"));

members.forEach(member => {
    member.define();
})
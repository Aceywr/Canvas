function One (name, hp, atk, def) {
    this.name = name;    
    this.hp = hp;
    this.atk = atk;
    this.def = def;
}

One.prototype.attak = function () {

}
/*One.prototype = {
    attak : function () {
        console.log(this.hp);
    }
}    */
function fight (hero, monster) {
    if (hero.hp > 0 && monster.hp > 0) {
        monster.hp = monster.hp-hero.atk*(1-monster.def/100);
        hero.hp = hero.hp-monster.atk*(1-hero.def/100);
        console.log(hero.name+"攻击了"+monster.name+"造成"+hero.atk*(1-monster.def/100)+"点伤害！");
        console.log(monster.name+"攻击了"+hero.name+"造成"+monster.atk*(1-hero.def/100)+"点伤害！");
        return fight(hero, monster);        
    } else {
        if(hero.hp <= 0) {
            console.log(hero.name+"死了");
        }else{
            console.log(monster.name+"死了");
        }

    }
}

var hero = new One ("英雄", 100, 10, 80);
var monster = new One ("怪兽", 100, 12, 10);

fight(hero, monster);

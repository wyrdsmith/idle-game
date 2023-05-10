var gameclock = new Clock();
var necromancer = new Player();

var statBlock = new Observer(() => {
	$('#health').html(Math.round(necromancer.getHealth() * 100) / 100);
	$('#mana').html(Math.round(necromancer.getMana() * 100) / 100);
	$('#gold').html(Math.round(necromancer.getGold() * 100) / 100);
	$('#minions').html(necromancer.printMinions());
});

var summonSkeletalLaborer = new Spell({
	caster: necromancer,
	target: necromancer,
	name: 'Summon Skeletal Laborer',
	details:
		'Summons the lowest level of undead to toil for you. Increases the rate of gold earned by 0.01 per skeletal laborer summoned.',
	manaCost: 25,
	healthCost: 5,
	effect: function () {
		this.caster.minions.push(
			new Minion({
				name: 'Skeletal Laborer',
				type: 'skeleton',
				role: 'labor',
				resource: 'gold',
				boost: 0.01,
			})
		);
		this.target.updateMinionGoldRegenRateBoost();
	},
});

var foe = new Enemy({
	name: 'King Aurus',
	health: 1000,
	target: necromancer,
});

var enemyStats = new Observer(() => {
	$('#enemyName').html(foe.name + ': ');
	$('#enemyHealth').html(foe.getHealth() + ' HP');
});

var summonSkeletalWarrior = new Spell({
	caster: necromancer,
	target: foe,
	name: 'Summon Skeletal Warrior',
	details:
		'Summons the lowest level of undead to fight for you. Deals damage to your enemies at a rate of 1 damage per hit.',
	manaCost: 30,
	healthCost: 10,
	effect: function () {
		this.caster.minions.push(
			new Minion({
				name: 'Skeletal Warrior',
				type: 'skeleton',
				role: 'warrior',
				damage: 1,
			})
		);
		this.target.updateHealthLossRate();
	},
});

function start() {
	$('#start').hide();
	$('#game').show();
	gameclock.start();
}

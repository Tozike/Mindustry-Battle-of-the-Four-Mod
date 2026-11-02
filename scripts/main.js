Blocks.coreShard.health = 2000;
Blocks.coreShard.armor = 2;
Blocks.coreFoundation.health = 6000;
Blocks.coreFoundation.armor = 4;
Blocks.coreNucleus.health = 17500;
Blocks.coreNucleus.armor = 6;

const dagger = Vars.content.unit("dagger"); // DAGGER---------------------------------
	dagger.speed = 0.9;
	dagger.weapons.get(0).bullet.damage = 10;
	dagger.weapons.get(0).bullet.speed = 6;
	dagger.weapons.get(0).bullet.lifetime = 25;
	dagger.weapons.get(0).bullet.trailWidth = 1;
	dagger.weapons.get(0).bullet.trailLength = 2;
	dagger.weapons.get(0).bullet.width = 10;
	dagger.weapons.get(0).bullet.height = 12;
	
const mace = Vars.content.unit("mace"); // MACE---------------------------------
	mace.health = 500;
	mace.armor = 2;
	mace.speed = 0.7;
	mace.targetAir = false;
	mace.weapons.get(0).bullet.collidesAir = false;
	mace.weapons.get(0).bullet.damage = 35;
	
const fortress = Vars.content.unit("fortress"); // FORTRESS-----------------------------------
	fortress.health = 950;
	fortress.armor = 5;
	fortress.speed = 0.5;
	fortress.weapons.get(0).bullet.damage = 80;
	fortress.weapons.get(0).bullet.splashDamage = 40;

    const fortressSmallWeapon = new Weapon("large-weapon");
		fortressSmallWeapon.reload = 20;
		fortressSmallWeapon.x = 0;
		fortressSmallWeapon.y = -4;
		fortressSmallWeapon.shootY = 2;
		fortressSmallWeapon.mirror = false;
		fortressSmallWeapon.rotate = true;
		fortressSmallWeapon.rotateSpeed = 5;
		fortressSmallWeapon.top = true;
		
		fortressSmallWeapon.bullet = new BasicBulletType(9, 10); // (speed, damage)
		fortressSmallWeapon.bullet.width = 10;
		fortressSmallWeapon.bullet.height = 12;
		fortressSmallWeapon.bullet.trailWidth = 1;
		fortressSmallWeapon.bullet.trailLength = 2;
		fortressSmallWeapon.bullet.lifetime = 20;
		fortressSmallWeapon.bullet.absorbable = false;

    fortress.weapons.add(fortressSmallWeapon);
	
const scepter = Vars.content.unit("scepter"); // SCEPTER-----------------------------------
	scepter.health = 5000;
	scepter.armor = 8;
	scepter.weapons.get(0).shootCone = 6.9;
	scepter.weapons.get(1).reload = 25;
	scepter.weapons.get(2).reload = 25;
	scepter.immunities.add(StatusEffects.shocked);
	scepter.weapons.get(0).bullet.damage = 100;
	scepter.weapons.get(0).bullet.lifetime = 35;
	scepter.weapons.get(0).bullet.trailWidth = 3;
	scepter.weapons.get(0).bullet.trailLength = 4;
	scepter.weapons.get(1).bullet.damage = 20;
	scepter.weapons.get(1).bullet.speed = 7;
	scepter.weapons.get(1).bullet.trailWidth = 2;
	scepter.weapons.get(1).bullet.trailLength = 3;
	scepter.weapons.get(1).bullet.lifetime = 30;
	scepter.weapons.get(2).bullet.damage = 20;
	scepter.weapons.get(2).bullet.speed = 7;
	scepter.weapons.get(2).bullet.trailWidth = 1;
	scepter.weapons.get(2).bullet.trailLength = 2;
	scepter.weapons.get(2).bullet.lifetime = 30;
	
const reign = Vars.content.unit("reign"); // REIGN-----------------------------------
	reign.health = 15000;
	reign.armor = 16;
	reign.speed = 0.3;
	reign.weapons.get(0).shootCone = 6.9;
	reign.weapons.get(0).bullet.trailWidth = 4;
	reign.weapons.get(0).bullet.trailLength = 3;
	
	const reignSmallWeapon = new Weapon("large-weapon");
		reignSmallWeapon.rotate = true;
		reignSmallWeapon.mirror = true;
		reignSmallWeapon.top = true;
		reignSmallWeapon.x = 13;
		reignSmallWeapon.y = 2;
		reignSmallWeapon.shootY = 2;
		reignSmallWeapon.reload = 12;
		reignSmallWeapon.rotateSpeed = 5;
		
		reignSmallWeapon.bullet = new BasicBulletType(9, 20);
		reignSmallWeapon.bullet.width = 10;
		reignSmallWeapon.bullet.height = 12;
		reignSmallWeapon.bullet.trailWidth = 1;
		reignSmallWeapon.bullet.trailLength = 2;
		reignSmallWeapon.bullet.lifetime = 30;
		reignSmallWeapon.bullet.absorbable = false;
		
	reign.weapons.add(reignSmallWeapon);
	
	const reignMissileWeapon = new Weapon("missiles-mount");
		reignMissileWeapon.rotate = true;
		reignMissileWeapon.mirror = false;
		reignMissileWeapon.top = true;
		reignMissileWeapon.x = 0;
		reignMissileWeapon.y = -5;
		reignMissileWeapon.shootY = 2;
		reignMissileWeapon.reload = 50;
		reignMissileWeapon.rotateSpeed = 3;
		reignMissileWeapon.shootSound = Sounds.shootMissileLong;
		
		reignMissileWeapon.bullet = new MissileBulletType(6, 100);
		reignMissileWeapon.bullet.width = 12;
		reignMissileWeapon.bullet.height = 16;
		reignMissileWeapon.bullet.trailWidth = 2;
		reignMissileWeapon.bullet.trailLength = 4;
		reignMissileWeapon.bullet.lifetime = 60;
		reignMissileWeapon.bullet.weaveMag = 2;
		reignMissileWeapon.bullet.weaveScale = 3;
		reignMissileWeapon.bullet.homingPower = 0.3;
		reignMissileWeapon.bullet.splashDamageRadius = 5;
		reignMissileWeapon.bullet.splashDamage = 75;
		reignMissileWeapon.bullet.hitEffect = Fx.blastExplosion;
		reignMissileWeapon.bullet.despawnEffect = Fx.blastExplosion;
		
	reign.weapons.add(reignMissileWeapon);
		
const nova = Vars.content.unit("nova"); // NOVA-----------------------------------	
	nova.health = 125;
	nova.armor = 0;
	nova.speed = 0.8;
	nova.weapons.get(0).bullet.damage = 12;
	nova.abilities.get(0).range = 50;

const pulsar = Vars.content.unit("pulsar"); // PULSAR-----------------------------------	
	pulsar.health = 500;
	pulsar.armor = 2;
	pulsar.abilities.remove(0);
	pulsar.abilities.add(new RepairFieldAbility(10, 60 * 4, 60));
	pulsar.weapons.get(0).bullet.lightningLength = 10;
	pulsar.weapons.get(0).bullet.damage = 20;
	pulsar.immunities.add(StatusEffects.shocked);
	
const quasar = Vars.content.unit("quasar"); // QUASAR-----------------------------------	
	quasar.health = 1250;
	quasar.armor = 5;
	quasar.abilities.add(new RepairFieldAbility(10, 60 * 4, 70));
	quasar.abilities.get(0).max = 500;
	
const vela = Vars.content.unit("vela"); // VELA-----------------------------------	
	vela.health = 5000;
	vela.armor = 8;
	vela.speed = 0.5;
	vela.singleTarget = false;
	vela.abilities.add(new RepairFieldAbility(10, 60 * 4, 70));
	
const corvus = Vars.content.unit("corvus"); // CORVUS-----------------------------------	
	corvus.health = 12500;
	corvus.armor = 10;
	corvus.weapons.get(0).bullet.damage = 800;
	corvus.weapons.get(0).bullet.healPercent = 15;
	corvus.abilities.add(new RepairFieldAbility(10, 60 * 4, 80));
	
	const corvusSmallWeapon = new Weapon("repair-beam-weapon-center-large");
		corvusSmallWeapon.rotate = true;
		corvusSmallWeapon.mirror = true;
		corvusSmallWeapon.top = true;
		corvusSmallWeapon.x = 17;
		corvusSmallWeapon.y = -7;
		corvusSmallWeapon.reload = 15;
		corvusSmallWeapon.rotateSpeed = 2;
		
		corvusSmallWeapon.bullet = new LaserBulletType();
		corvusSmallWeapon.bullet.damage = 60;
		corvusSmallWeapon.bullet.sideAngle = 45;
		corvusSmallWeapon.bullet.sideWidth = 1;
		corvusSmallWeapon.bullet.sideLength = 60;
		corvusSmallWeapon.bullet.length = 130;
		corvusSmallWeapon.bullet.collidesTeam = true;
		corvusSmallWeapon.bullet.healPercent = 5;
		corvusSmallWeapon.bullet.colors = [
			Color.valueOf("8cf5bb"),
			Color.valueOf("8cf5bb"),
			Color.valueOf("ffffff")
		];
		
	corvus.weapons.add(corvusSmallWeapon);
	
const crawler = Vars.content.unit("crawler"); // CRAWLER-----------------------------------	
	crawler.weapons.get(0).bullet.splashDamage = 120;
	
const atrax = Vars.content.unit("atrax"); // ATRAX-----------------------------------	
	atrax.weapons.get(0).bullet.damage = 15;
	
const spiroct = Vars.content.unit("spiroct"); // SPIROCT-----------------------------------	
	spiroct.weapons.get(0).bullet.damage = 25;
	spiroct.weapons.get(1).bullet.damage = 20;
	
	const spiroctShieldAbility = new ShieldArcAbility();
		spiroctShieldAbility.radius = 20;
		spiroctShieldAbility.angle = 120;
		spiroctShieldAbility.regen = (20/60);
		spiroctShieldAbility.cooldown = 60 * 8;
		spiroctShieldAbility.max = 800;
		spiroctShieldAbility.width = 4;
		spiroctShieldAbility.y = -6;
		spiroctShieldAbility.whenShooting = false;
	
	spiroct.abilities.add(spiroctShieldAbility);
	
const arkyid = Vars.content.unit("arkyid"); // ARKYID-----------------------------------	
	arkyid.health = 6000;
	arkyid.armor = 8;
	arkyid.weapons.get(0).bullet.damage = 25;
	
	const arkyidShieldAbility = new ShieldArcAbility();
		arkyidShieldAbility.radius = 30;
		arkyidShieldAbility.angle = 120;
		arkyidShieldAbility.regen = (40/60);
		arkyidShieldAbility.cooldown = 60 * 15;
		arkyidShieldAbility.max = 1500;
		arkyidShieldAbility.width = 6;
		arkyidShieldAbility.y = -6;
		arkyidShieldAbility.whenShooting = false;
		
	arkyid.abilities.add(arkyidShieldAbility);
	
const toxopid = Vars.content.unit("toxopid"); // TOXOPID-----------------------------------	
	toxopid.health = 18000;
	toxopid.armor = 20;
	
	const toxopidShieldAbility = new ShieldArcAbility();
		toxopidShieldAbility.radius = 40;
		toxopidShieldAbility.angle = 120;
		toxopidShieldAbility.regen = (50/60);
		toxopidShieldAbility.cooldown = 60 * 20;
		toxopidShieldAbility.max = 2500;
		toxopidShieldAbility.width = 8;
		toxopidShieldAbility.y = -14;
		toxopidShieldAbility.whenShooting = false;
		
	toxopid.abilities.add(toxopidShieldAbility);
	
const flare = Vars.content.unit("flare"); // FLARE-----------------------------------
	flare.health = 75;
	flare.weapons.get(0).bullet.damage = 10;
	flare.weapons.get(0).bullet.speed = 6;
	flare.weapons.get(0).bullet.trailWidth = 1;
	flare.weapons.get(0).bullet.trailLength = 2;
	flare.weapons.get(0).bullet.lifetime = 28;
	
const horizon = Vars.content.unit("horizon"); // HORIZON-----------------------------------	
	horizon.health = 300;
	horizon.armor = 2;
	horizon.weapons.get(0).bullet.splashDamage = 30;

const zenith = Vars.content.unit("zenith"); // ZENITH-----------------------------------
	zenith.health = 750;
	zenith.weapons.get(0).bullet.damage = 20;
	
const antumbra = Vars.content.unit("antumbra"); // ANTUMBRA-----------------------------------
	antumbra.health = 6000;
	antumbra.armor = 6;
	antumbra.weapons.get(0).bullet.damage = 25;
	antumbra.weapons.get(0).bullet.splashDamage = 20;
	antumbra.weapons.get(2).bullet.trailWidth = 3;
	antumbra.weapons.get(2).bullet.trailLength = 4;
	
const eclipse = Vars.content.unit("eclipse"); // ECLIPSE-----------------------------------
	eclipse.health = 16000;
	eclipse.armor = 10;
	eclipse.weapons.get(1).bullet.damage = 40;
	eclipse.weapons.get(1).bullet.splashDamage = 35;
	eclipse.weapons.get(1).bullet.speed = 8;
	eclipse.weapons.get(2).bullet.trailWidth = 2;
	eclipse.weapons.get(2).bullet.trailLength = 3;
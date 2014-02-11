'use strict';

var create = Object.create;

module.exports = function (t, a) {
	var x = { foo: 'raz', bar: 'dwa' }, y;
	y = t(x);
	a.not(y, x, "Returns copy");
	a.deep(y, x, "Plain");

	x = { raz: 'one', dwa: 'two' };
	x = create(x);
	x.trzy = 'three';
	x.cztery = 'four';
	x = create(x);
	x.dwa = 'two!';
	x.trzy = 'three!';
	x.piec = 'five';
	x.szesc = 'six';

	a.deep(t(x), { raz: 'one', dwa: 'two!', trzy: 'three!', cztery: 'four',
		piec: 'five', szesc: 'six' }, "Deep object");

	a.deep(t({ marko: 'raz', raz: 'foo' }, x, { szesc: 'elo', siedem: 'bibg' }),
		{ marko: 'raz', raz: 'one', dwa: 'two!', trzy: 'three!', cztery: 'four',
			piec: 'five', szesc: 'elo', siedem: 'bibg' }, "Multiple options");
};

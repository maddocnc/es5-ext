'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t(new Date(2000, 0, 1, 13, 32, 34, 234)).valueOf(),
		new Date(2000, 0, 1).valueOf());
};
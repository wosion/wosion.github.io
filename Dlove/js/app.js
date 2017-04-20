(function(lettuce) {
	var L = new lettuce(),
		irRemote = "2",
		fullStar = "1",
		data = {
			rise: "一起溜达、",
			down: "一起斗图、",
			yours: "慢慢，留下你的样子",
			together: "然后、你，我，我们",
			rose: "I wanna sth with you \n And you will be my reason"
		};

	var togetherTime = new Date();
	togetherTime.setFullYear(2017,03,19);
	togetherTime.setHours(22);
	togetherTime.setMinutes(35);
	togetherTime.setSeconds(16);
	togetherTime.setMilliseconds(0);

	function render(element) {
		var html = '<div class="' + element + '"><h3>{%=o.' + element + '%}</h3></div>';
		var result = L.Template.tmpl(html, data);
		document.getElementById("results").innerHTML = result;
	}

	function rise() {
		render('rise');
	}

	function down() {
		render('down');
	}

	function yours() {
		render('yours');
	}

	function together() {
		render('together');
	}

	function rose() {
		render('rose');
	}

	function showLove() {
		var c = document.getElementsByTagName('canvas')[0];
		var a = c.getContext('2d');
		e = [];
		h = [];
		O = c.width = innerWidth;
		Q = c.height = innerHeight;
		v = 32;
		M = Math;
		R = M.random;
		C = M.cos;
		Y = 6.3;
		for(i = 0; i < Y; i += 0.2) h.push([O / 2 + 180 * M.pow(M.sin(i), 3), Q / 2 + 10 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
		for(i = 0; i < v;) {
			x = R() * O;
			y = R() * Q;
			H = 80 * (i / v) + 280; //色相hue
			S = 40 * R() + 60; //饱和度saturatio
			B = 60 * R() + 20; //亮度brightness
			f = [];
			for(k = 0; k < v;) f[k++] = {
				x: x,
				y: y,
				X: 0,
				Y: 0,
				R: 1 - k / v + 1,
				S: R() + 1,
				q: ~~(R() * v),
				D: 2 * (i % 2) - 1,
				F: 0.2 * R() + 0.7,
				f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
			};
			e[i++] = f
		}

		function _(d) {
			a.fillStyle = d.f;
			a.beginPath();
			a.arc(d.x, d.y, d.R, 0, Y, 1);
			a.closePath();
			a.fill()
		}
		setInterval(function() {
			a.fillStyle = "rgba(0,0,0,.2)";
			a.fillRect(0, 0, O, Q);
			for(i = v; i--;) {
				f = e[i];
				u = f[0];
				q = h[u.q];
				D = u.x - q[0];
				E = u.y - q[1];
				G = M.sqrt(D * D + E * E);
				10 > G && (0.95 < R() ? u.q = ~~(R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
				u.X += -D / G * u.S;
				u.Y += -E / G * u.S;
				u.x += u.X;
				u.y += u.Y;
				_(u);
				u.X *= u.F;
				u.Y *= u.F;
				for(k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), _(N)
			};
			a.fillStyle = "#F90072";
			a.font = "bold 15px Arial";
			a.fillText("To: ^O^小小米粒儿^O^", O / 2 - 75, Q / 2 - 27);
			a.fillStyle = "#002672";
			a.fillText("2017-04-19 22:35:16", O / 2 - 68, Q / 2 - 7);
			a.fillStyle = "#F92600";
			a.fillText("From Aronblod丶", O / 2 - 55, Q / 2 + 13);
			var res = timeElapse(togetherTime);
			a.fillText("We."+res.days+"天"+res.hours+"小时"+res.miniutes+"分"+res.seconds+"秒", O/2-160, Q/2-160);
		}, 25);
	}

	function final() {
		document.getElementById("results").innerHTML = '<canvas width="1440" height="740"></canvas>';
		L.Event.trigger("showLove")
	}

	L.Event.on("showLove", showLove);

	var home = function() {
		L.Router.navigate("");
	};

	L.Router
		.add(/#/, home)
		.add(/#about/, rise)
		.add(/#what/, down)
		.add(/#why/, final)
		.add(/#yours/, yours)
		.add(/#together/, together)
		.add(/#rose/, rose)
		.load();

	function show(func, n) {
		var p = new L.Promise();
		var code = function() {
			if(func !== undefined) {
				func();
				L.FX.fadeIn(document.getElementById('results'), {
					duration: 1000,
					complete: function() {}
				});
			}
			p.done(null, n);
		};
		setTimeout(code, n);
		return p;
	}

	var p = new L.Promise();
	show(undefined, 4000).then(
		function() {
			return show(rise, 0)
		}
	).then(
		function() {
			return show(down, 7000)
		}
	).then(
		function() {
			return show(yours, 7000)
		}
	).then(
		function() {
			return show(together, 7000)
		}
	).then(
		function() {
			return show(rose, 7000)
		}
	).then(
		function() {
			return show(final, 7000)
		}
	);

	function timeElapse(c) {
		var e = Date();
		var f = (Date.parse(e) - Date.parse(c)) / 1000;
		var g = Math.floor(f / (3600 * 24));
		f = f % (3600 * 24);
		var b = Math.floor(f / 3600);
		if(b < 10) {
			b = "0" + b
		}
		f = f % 3600;
		var d = Math.floor(f / 60);
		if(d < 10) {
			d = "0" + d
		}
		f = f % 60;
		if(f < 10) {
			f = "0" + f
		}
		var a = {
			"days": g,
			"hours": b,
			"miniutes": d,
			"seconds": f
		};
		return a;
	}
}(lettuce));
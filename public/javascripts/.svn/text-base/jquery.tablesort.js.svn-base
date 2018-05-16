(function() {
	var tbody = document.querySelector('#tableSort').tBodies[0];
	var th = document.querySelector('#tableSort').tHead.rows[0].cells;
	console.log(th)

	var td = tbody.rows;
	for(var i = 0; i < th.length; i++) {
		alert(1111)
		th[i].flag = 1;
		th[i].onclick = function() {
			sort(this.getAttribute('data-type'), this.flag, this.cellIndex);
			this.flag = -this.flag;
		};
	};

	function sort(str, flag, n) {
		var arr = [];
		for(var i = 0; i < td.length; i++) {
			arr.push(td[i]);
		};
		arr.sort(function(a, b) {
			return method(str, a.cells[n].innerHTML, b.cells[n].innerHTML) * flag;
		});
		for(var i = 0; i < arr.length; i++) {
			tbody.appendChild(arr[i]);
		};
	};

	function method(str, a, b) {
		switch(str) {
			case 'num':
				return a - b;
				break;
			case 'string':
				return a.localeCompare(b);
				break;
			case 'date':
				return new Date(a.split('-').join('/')).getTime() - new Date(b.split('-').join('/')).getTime();
				break;
			case 'ament': 
				return (a.replace(/,/g, "")).replace(/%/g, "") - (b.replace(/,/g, "")).replace(/%/g, "");
				break;
		};
	};
})();

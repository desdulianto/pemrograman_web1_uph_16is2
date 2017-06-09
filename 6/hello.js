
	function hello() {
		let name = document.getElementById("name")
		let output = document.getElementById("output")
		let val
		if (name.value.trim() === "")
			val = "world"
		else
			val = name.value

		output.innerHTML = "Hello " + val
	}
	
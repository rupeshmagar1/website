const counts=document.querySelectorAll('.count')
	const speed=100
	counts.forEach((counter)=>{
		function upData() {
			const target = Number(counter.getAttribute('data-target'))
			const count=Number(counter.innerText)
			const inc=target/speed
			if (count<target) {
				counter.innerText=Math.floor(inc+count)
				setTimeout(upData,80)
			}else{
				counter.innerText=target
			}
		}
		upData()
	})


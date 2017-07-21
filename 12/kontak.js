var Kontak = {
	props: ['nama', 'alamat', 'telepon'],
	methods: {
		hapus: function() {
			this.$emit('hapus-item', {nama: this.nama, alamat: this.alamat, telepon: this.telepon})
		}
	},
	template: "<tr><td>{{nama}}</td><td>{{alamat}}</td><td>{{telepon}}</td><td><button @click='hapus'>Hapus</button><tr>",
}
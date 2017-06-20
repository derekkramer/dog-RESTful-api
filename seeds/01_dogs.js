
exports.seed = (knex, Promise) => {
	return knex('dogs').del()
	.then(() => {
		return knex('dogs').insert([
			{
				breed: 'Siberian Husky',
				size: 'Large',
				frequency: 'Common',
				image_url: 'http://tu9srvbirvvtmtyky2rums13d3cuzg9ndgltzs5jb200.g00.dogtime.com/g00/2_ZG9ndGltZS5jb20%3D_/TU9SRVBIRVVTMTYkaHR0cDovL2NkbjEtd3d3LmRvZ3RpbWUuY29tL2Fzc2V0cy91cGxvYWRzL2dhbGxlcnkvc2liZXJpYW4taHVza3ktZG9nLWJyZWVkLXBpY3R1cmVzL3NpYmVyaWFuLWh1c2t5LWRvZy1icmVlZC1waWN0dXJlcy0xLmpwZz9pMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$'
			},
			{
				breed: 'Pug',
				size: 'Small',
				frequency: 'Common',
				image_url: 'http://tu9srvbirvvtmtyky2rumi13d3cuzg9ndgltzs5jb200.g00.dogtime.com/g00/2_ZG9ndGltZS5jb20%3D_/TU9SRVBIRVVTMTYkaHR0cDovL2NkbjItd3d3LmRvZ3RpbWUuY29tL2Fzc2V0cy91cGxvYWRzL2dhbGxlcnkvcHVnLWRvZy1icmVlZC1waWN0dXJlcy85LWJhbGFuY2UuanBnP2kxMGMubWFyay5pbWFnZS50eXBl_$/$/$/$/$/$'
			},
			{
				breed: 'Labrador Retriever',
				size: 'Large',
				frequency: 'Common',
				image_url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg'
			},
			{
				breed: 'German Shepherd',
				size: 'Large',
				frequency: 'Common',
				image_url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg'
			},
			{
				breed: 'Rottweiler',
				size: 'Large',
				frequency: 'Uncommon',
				image_url: 'https://s-media-cache-ak0.pinimg.com/736x/16/f3/9e/16f39e58bede777ff5ad25e57521efb4.jpg'
			},
		]);
	});
};

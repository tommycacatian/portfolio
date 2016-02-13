function AlbumCtrl($scope){
	$scope.images = [
	{image:'../acimg/artworks/1.jpg',thumbnail:'../acimg/artworks/thumbnails/1th.jpg',description:'this is image 1'},
	{image:'../acimg/artworks/2.jpg',thumbnail:'../acimg/artworks/thumbnails/2th.jpg',description:'this is image 2'},
	{image:'../acimg/artworks/3.jpg',thumbnail:'../acimg/artworks/thumbnails/3th.jpg',description:'this is image 3'},
	{image:'acimg/artworks/4.jpg',thumbnail:'acimg/artworks/thumbnails/4th.jpg',description:'this is image 4'},
	{image:'acimg/artworks/5.jpg',thumbnail:'acimg/artworks/thumbnails/5th.jpg',description:'this is image 5'},
	{image:'acimg/artworks/6.jpg',thumbnail:'acimg/artworks/thumbnails/6th.jpg',description:'this is image 6'},
	{image:'acimg/artworks/7.jpg',thumbnail:'acimg/artworks/thumbnails/7th.jpg',description:'this is image 7'},
	{image:'acimg/artworks/8.jpg',thumbnail:'acimg/artworks/thumbnails/8th.jpg',description:'this is image 8'}
	];

	$scope.currentImage=_.first($scope.images);

	$scope.setCurrentImage = function(image){
		$scope.currentImage=image;
	} 

}
app.controller("newUserController",function($state, $http, newBookService, getBookDetails){
	var self = this;
	self.book = {};
	self.data=getBookDetails.getData();

	self.submitFormData = function(){
		self.buttonDisabled = true;
		for(var i=0;i<self.data.$$state.value.length;i++){
			if(self.data.$$state.value[i].name == self.book.name) {
					self.myFlag = false;
					break;
			}else{self.myFlag = true;}
		}
		if(self.myFlag){
				newBookService.newBookDetails(self.book).then(function(){
					self.buttonDisabled = false;
					$state.go('bookDetails');
				});
		}else{alert("The book name is allready exists...");}
	}
});

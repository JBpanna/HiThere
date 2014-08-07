class MainController < ApplicationController
  def index
  	@people=Person.all
  end
end

def whateverPosts
	postServer = params[:whatever]

	testlogin = {whatever: postServer}
	p testlogin

	whateverText=Person.create(
		whatever: postServer)
		whateverText.save

	head :ok
end
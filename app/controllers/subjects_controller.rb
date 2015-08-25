class SubjectsController < ApplicationController
  def index
    @subjects = Subject.all
    render json: @subjects
  end

  def create
    @subject = Subject.create(title: params[:title])
    redirect_to 'file:///Users/apprentice/Desktop/twigs/public/pages/subjects.html'
  end

end

class NotesController < ApplicationController

  def index
    @notes = Note.where(subject_id: params[:subject_id])
    render json: @notes
  end
end

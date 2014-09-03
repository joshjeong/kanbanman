class TasksController < ApplicationController

  def index
  end

  def new
    @task = Task.new
  end

  def create
    p 'create route'
    @user = User.find(params[:user_id])
    @task = @user.tasks.create(task_params)
  end


private

  def task_params
    params.require(:task).permit(:user, :action, :priority)
  end


end

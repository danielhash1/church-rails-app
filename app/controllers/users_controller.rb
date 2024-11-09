class UsersController < ApplicationController
    # Задаем фильтр аутентификации, чтобы только авторизованные пользователи могли выполнять действия
    before_action :authenticate_user!, except: [:index, :show]
    before_action :set_user, only: [:show, :edit, :update, :destroy]
  
    # GET /users
    def index
      @users = User.all
    end
  
    # GET /users/:id
    def show
      # @user загружается в before_action
    end
  
    # GET /users/new
    def new
      @user = User.new
    end
  
    # POST /users
    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to @user, notice: 'User was successfully created.'
      else
        render :new
      end
    end
  
    # GET /users/:id/edit
    def edit
      # @user загружается в before_action
    end
  
    # PATCH/PUT /users/:id
    def update
      if @user.update(user_params)
        redirect_to @user, notice: 'User was successfully updated.'
      else
        render :edit
      end
    end
  
    # DELETE /users/:id
    def destroy
      @user.destroy
      redirect_to root_path, notice: 'User was successfully deleted.'

    end
  
    private
  
    # Используем этот метод в before_action, чтобы найти пользователя по ID
    def set_user
      if params[:id] =~ /\D/
        redirect_to root_path, alert: 'Invalid user ID'
      else
        @user = User.find(params[:id])
      end
    end
    

  
  
    # Только разрешенные параметры могут быть использованы для создания/обновления
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
  end
  
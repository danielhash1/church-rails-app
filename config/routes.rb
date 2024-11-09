Rails.application.routes.draw do
  root 'home#index'

  devise_for :users

  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  resources :posts
  resources :ministries
  resources :services

end

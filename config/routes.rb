Rails.application.routes.draw do
  namespace :api do
    resources :business_owners
    resources :inventories
    resources :suppliers
  end
end

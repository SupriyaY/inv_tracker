Rails.application.routes.draw do
  namespace :api do
    resources :business_owners do
      resources :inventories do
        resources :suppliers
      end
    end
      get '/categories' , to: 'categories#index'
  end
end

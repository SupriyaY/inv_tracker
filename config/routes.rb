Rails.application.routes.draw do
  namespace :api do
    resources :business_owners do
      resources :inventories do
        resources :suppliers
      end
    end
  end
end

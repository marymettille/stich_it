Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      resources :patterns, only: %i[create index update destroy]
      match 'pattern/:id' => 'patterns#view', :via => %i[get]

      resources :crafts, only: %i[create index]
    end
  end
end

class Api::InventoriesController < ApplicationController
   
    # def index
#         @inventories = Inventory.all
#         render json: @inventory
#     end
        
#     def show
#         @inventory = Inventory.find(params[:id])
#         render json: @inventory
#     end
    
#     def create
#         @inventory = Inventory.create!(inventory_params)
#         redirect_to "users/#{user.id}/inventories/#{@inventory.id}" 
#     end
    
#     def update
#         @inventory = Inventory.find(params[:id])
#         @inventory.update!(city_params)
#         render json: @inventory
#     end
    
#     def destroy
#         @inventory = Inventory.find(params[:id]).delete
#         render status: :ok
#     end
    
#     private
#     def inventory_params
#         params.require(:inventory).permit(:category, :name, :description)
#     end
# end
end

class Api::InventoriesController < ApplicationController
   
    def index
        @business_owner = BusinessOwner.find(params[:business_owner_id])
        # No supplier id because nested route was BO / INV
        if (params[:supplier_id] == nil)
            @inventories = @business_owner.inventories
            render json: @inventories
        end
                
        ### NOT IMPLEMENTED ###
        # Need supplier id because nested route was BO / SUPP / INV
        # if (params[:supplier_id] != nil)
        #     @supplier = Supplier.find(params[:supplier_id])
        # end

    end
        
    def show
        @inventory = Inventory.find(params[:id])
        render json: @inventory
    end
    
    def create
        @inventory = Inventory.create!(inventory_params)
        redirect_to "business_owners/#{business_owner.id}/inventories/#{@inventory.id}" 
    end
    
    def update
        @inventory = Inventory.find(params[:id])
        @inventory.update!(city_params)
        render json: @inventory
    end
    
    def destroy
        @inventory = Inventory.find(params[:id]).delete
        render status: :ok
    end
    
    private
    def inventory_params
        params.require(:inventory).permit(:category, :name, :description)
    end
end
end

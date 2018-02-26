class BusinessOwner < ApplicationRecord
    has_many :inventories
    has_many :bo_inv_supplier
end

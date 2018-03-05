class Inventory < ApplicationRecord
    has_many :suppliers, through: :bo_inv_suppliers
    has_many :business_owners, through: :bo_inv_suppliers
end

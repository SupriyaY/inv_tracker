class Supplier < ApplicationRecord
    has_many :bo_inv_suppliers dependent :destory
    has_many :inventories, through: :bo_inv_suppliers
    has_many :business_owners, through: :bo_inv_suppliers
end

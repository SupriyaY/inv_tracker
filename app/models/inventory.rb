class Inventory < ApplicationRecord
    has_many :suppliers
    hs_many :bo_inv_supplier
end

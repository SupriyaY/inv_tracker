class BoInvSupplier < ApplicationRecord
  belongs_to :business_owner
  belongs_to :supplier
  belongs_to :inventory
end

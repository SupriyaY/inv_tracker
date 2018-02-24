class CreateBoInvSuppliers < ActiveRecord::Migration[5.1]
  def change
    create_table :bo_inv_suppliers do |t|
      t.references :business_owner, foreign_key: true
      t.references :supplier, foreign_key: true
      t.references :inventory, foreign_key: true

      t.timestamps
    end
  end
end

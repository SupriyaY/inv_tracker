class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.string :category
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

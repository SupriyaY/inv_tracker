# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180224211709) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bo_inv_suppliers", force: :cascade do |t|
    t.bigint "business_owner_id"
    t.bigint "supplier_id"
    t.bigint "inventory_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_owner_id"], name: "index_bo_inv_suppliers_on_business_owner_id"
    t.index ["inventory_id"], name: "index_bo_inv_suppliers_on_inventory_id"
    t.index ["supplier_id"], name: "index_bo_inv_suppliers_on_supplier_id"
  end

  create_table "business_owners", force: :cascade do |t|
    t.string "name"
    t.string "business_name"
    t.string "business_description"
    t.string "business_address"
    t.string "business_email"
    t.string "business_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.string "category"
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "suppliers", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "contact_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bo_inv_suppliers", "business_owners"
  add_foreign_key "bo_inv_suppliers", "inventories"
  add_foreign_key "bo_inv_suppliers", "suppliers"
end

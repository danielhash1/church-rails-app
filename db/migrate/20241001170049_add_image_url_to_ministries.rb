class AddImageUrlToMinistries < ActiveRecord::Migration[7.1]
  def change
    add_column :ministries, :image_url, :string
  end
end

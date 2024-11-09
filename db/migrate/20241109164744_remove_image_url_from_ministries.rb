class RemoveImageUrlFromMinistries < ActiveRecord::Migration[7.1]
  def change
    remove_column :ministries, :image_url, :string
  end
end
